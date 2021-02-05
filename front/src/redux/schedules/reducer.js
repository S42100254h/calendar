import dayjs from "dayjs";
import { SCHEDULES_ADD_ITEM } from "./actions";

const init = {
  items: [
    {
      id: 1,
      title: "test",
      date: dayjs(),
      location: "conference",
      description: "About neko",
    },
  ],
  isLoading: false,
};

const schedulesReducer = (state = init, action) => {
  switch (action.type) {
  case SCHEDULES_ADD_ITEM:
    return {
      ...state,
      items: [...state.items, { ...action.payload }],
    };
  default:
    return state;
  }
};

export default schedulesReducer;
