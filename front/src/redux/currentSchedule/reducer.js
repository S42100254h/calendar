import {
  CURRENT_SCHEDULE_SET_ITEM,
  CURRENT_SCHEDULE_OPEN_DIALOG,
  CURRENT_SCHEDULE_CLOSE_DIALOG,
} from "./actions";

const init = {
  items: null,
  isDialogOpen: false,
};

const currentScheduleReducer = (state = init, action) => {
  switch (action.type) {
  case CURRENT_SCHEDULE_SET_ITEM:
    return { ...state, items: action.payload };
  case CURRENT_SCHEDULE_OPEN_DIALOG:
    return { ...state, isDialogOpen: true };
  case CURRENT_SCHEDULE_CLOSE_DIALOG:
    return { ...state, isDialogOpen: false };
  default:
    return state;
  }
};

export default currentScheduleReducer;
