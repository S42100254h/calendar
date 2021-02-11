import {
  SCHEDULES_ADD_ITEM,
  SCHEDULE_FETCH_ITEM,
  SCHEDULE_SET_LOADING,
  SCHEDULE_DELETE_ITEM,
  SCHEDULE_ASYNC_FAILURE,
  SCHEDULE_RESET_ERROR,
} from "./actions";

const init = {
  items: [],
  isLoading: false,
  error: null,
};

const schedulesReducer = (state = init, action) => {
  switch (action.type) {
  case SCHEDULES_ADD_ITEM:
    return {
      ...state,
      isLoading: false,
      items: [...state.items, { ...action.payload }],
    };
  case SCHEDULE_SET_LOADING:
    return {
      ...state,
      isLoading: true,
    };
  case SCHEDULE_FETCH_ITEM:
    return {
      ...state,
      isLoading: false,
      items: action.payload,
    };
  case SCHEDULE_DELETE_ITEM:
    return {
      ...state,
      isLoading: false,
      items: action.payload,
    };
  case SCHEDULE_ASYNC_FAILURE:
    return {
      ...state,
      error: action.error,
    };
  case SCHEDULE_RESET_ERROR:
    return {
      ...state,
      error: null,
    };
  default:
    return state;
  }
};

export default schedulesReducer;
