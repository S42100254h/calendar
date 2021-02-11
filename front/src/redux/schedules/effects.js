import {
  schedulesSetLoading,
  schedulesFetchItem,
  schedulesAddItem,
  schedulesDeleteItem,
} from "./actions";
import { get, post, deleteRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem = ({ month, year }) => async (dispatch) => {
  dispatch(schedulesSetLoading());

  try {
    const result = await get(`schedules?month=${month}&year=${year}`);
    const formatedSchedule = result.map((r) => formatSchedule(r));

    dispatch(schedulesFetchItem(formatedSchedule));
  } catch(err) {
    console.error(err);
  }
};

export const asyncSchedulesAddItem = (schedule) => async (dispatch) => {
  dispatch(schedulesSetLoading());

  try {
    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post("schedules", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
  } catch(err) {
    console.error(err);
  }
};

export const asyncSchedulesDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());
  const currentSchedules = getState().schedules.items;

  try {
    await deleteRequest(`schedules/${id}`);

    // 成功したらローカルのstateを削除
    const newSchedules = currentSchedules.filter((s) => s.id !== id);
    dispatch(schedulesDeleteItem(newSchedules));
  } catch(err) {
    console.error(err);
  }
};
