import dayjs from "dayjs";
import {
  SCHEDULES_ADD_ITEM,
  SCHEDULE_FETCH_ITEM,
  SCHEDULE_SET_LOADING,
} from "./actions";

const init = {
  items: [],
  isLoading: false,
};

const schedulesReducer = (state = init, action) => {
  switch (action.type) {
  case SCHEDULES_ADD_ITEM:
    return {
      ...state,
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
  default:
    return state;
  }
};

export default schedulesReducer;
