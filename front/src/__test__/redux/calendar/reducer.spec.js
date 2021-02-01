import calendarReducer from "../../../redux/calendar/reducer";
import { calendarSetMonth } from "../../../redux/calendar/actions";
import dayjs from "dayjs";
import { formatMonth } from "../../../services/calendar";

describe("calendarReducerのテスト", () => {
  it("action.type === CALENDAR_SET_MONTHの時のテスト", () => {
    const dummy = { month: 2, year: 2021 };
    const action = calendarSetMonth(dummy);

    const day =dayjs();
    const init = formatMonth(day);
    const newState = calendarReducer(init, action);

    expect(newState).toStrictEqual(dummy);
  });
});
