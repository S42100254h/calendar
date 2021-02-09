export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";
export const SCHEDULE_FETCH_ITEM = "SCHEDULE_FETCH_ITEM";
export const SCHEDULE_SET_LOADING = "SCHEDULE_SET_LOADING";

export const schedulesAddItem = (payload) => ({
  type: SCHEDULES_ADD_ITEM,
  payload,
});

export const schedulesFetchItem = (payload) => ({
  type: SCHEDULE_FETCH_ITEM,
  payload,
});

export const schedulesSetLoading = () => ({
  type: SCHEDULE_SET_LOADING,
});
