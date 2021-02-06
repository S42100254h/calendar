import {
  CURRENT_SCHEDULE_SET_ITEM,
  CURRENT_SCHEDULE_OPEN_DIALOG,
  CURRENT_SCHEDULE_CLOSE_DIALOG,
  currentSchedulesSetItem,
  currentScheduleOpenDialog,
  currentScheduleCloseDialog
} from "../../../redux/currentSchedule/actions";

describe("actions.jsのテスト", () => {
  it("currentSchedulesSetItemのテスト", () => {
    const dummy = { month: 2, year: 2021 }
    const action = currentSchedulesSetItem(dummy);

    expect(action).toStrictEqual(
      {
        type: CURRENT_SCHEDULE_SET_ITEM,
        payload: dummy
      }
    );
  });

  it("currentScheduleOpenDialogのテスト", () => {
    const action = currentScheduleOpenDialog();

    expect(action).toStrictEqual(
      {
        type: CURRENT_SCHEDULE_OPEN_DIALOG
      }
    );
  });

  it("currentScheduleCloseDialog", () => {
    const action = currentScheduleCloseDialog();

    expect(action).toStrictEqual(
      {
        type: CURRENT_SCHEDULE_CLOSE_DIALOG
      }
    );
  });
});
