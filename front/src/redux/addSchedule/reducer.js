import dayjs from "dayjs";
import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG,
  addScheduleSetValue,
  addScheduleOpenDialog,
  addScheduleCloseDialog,
} from "./actions";

const init = {
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: "",
  },
  isDialogOpen: false,
};

const addScheduleReducer = (state = init, action) => {
  switch (action.type) {
  case ADD_SCHEDULE_SET_VALUE:
    return { ...state, form: { ...state.form, ...action.payload } };
  case ADD_SCHEDULE_OPEN_DIALOG:
    return { ...state, isDialogOpen: true };
  case ADD_SCHEDULE_CLOSE_DIALOG:
    return init;
  default:
    return state;
  }
};

export default addScheduleReducer;
