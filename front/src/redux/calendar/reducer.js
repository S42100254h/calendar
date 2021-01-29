import { PlaylistAddOutlined } from "@material-ui/icons";
import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions";
import { formatMonth } from "../../services/calendar";

const day = dayjs();

const init = formatMonth(day);

const calendarReducer = (state = init, action) => {
  switch (action.type) {
  case CALENDAR_SET_MONTH:
    return action.payload;
  default:
    return state;
  }
};

export default calendarReducer;
