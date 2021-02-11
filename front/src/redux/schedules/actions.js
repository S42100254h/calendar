export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";
export const SCHEDULE_FETCH_ITEM = "SCHEDULE_FETCH_ITEM";
export const SCHEDULE_SET_LOADING = "SCHEDULE_SET_LOADING";
export const SCHEDULE_DELETE_ITEM = "SCHEDULE_DELETE_ITEM";
export const SCHEDULE_ASYNC_FAILURE = "SCHEDULE_ASYNC_FAILURE";
export const SCHEDULE_RESET_ERROR = "SCHEDULE_RESET_ERROR";

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

export const schedulesDeleteItem = (payload) => ({
  type: SCHEDULE_DELETE_ITEM,
  payload,
});

export const schedulesAsyncFailure = (error) => ({
  type: SCHEDULE_ASYNC_FAILURE,
  error,
});

export const schedulesResetError = () => ({
  type: SCHEDULE_RESET_ERROR,
});
