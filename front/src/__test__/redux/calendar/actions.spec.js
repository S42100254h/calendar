import { calendarSetMonth, CALENDAR_SET_MONTH } from "../../../redux/calendar/actions";

describe("actions.jsのテスト", () => {
  it("calendarSetMonth関数のテスト", () => {
    const dummy = { month: 2, year: 2021 };
    const action = calendarSetMonth(dummy);

    expect(action).toStrictEqual(
      {
        type: CALENDAR_SET_MONTH,
        payload: dummy
      }
    );
  });
});
