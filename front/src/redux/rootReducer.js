import { combineReducer } from "redux";
import calendarReducer from "./calendar/reducer";

const rootReducer = combineReducer({ calendar: calendarReducer });

export default rootReducer;
