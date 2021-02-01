import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG,
  addScheduleSetValue,
  addScheduleOpenDialog,
  addScheduleCloseDialog
} from "../../../redux/addSchedule/actions";

describe("actions.jsのテスト", () => {
  it("addScheduleSetValueのテスト", () => {
    const dummy = { month: 2, year: 2021 };
    const action = addScheduleSetValue(dummy);

    expect(action).toStrictEqual(
      {
        type: ADD_SCHEDULE_SET_VALUE,
        payload: dummy
      }
    );
  });

  it("addScheduleOpenDialogのテスト", () => {
    const action = addScheduleOpenDialog();

    expect(action).toStrictEqual(
      {
        type: ADD_SCHEDULE_OPEN_DIALOG
      }
    );
  });

  it("addScheduleCloseDialogのテスト", () => {
    const action = addScheduleCloseDialog();

    expect(action).toStrictEqual(
      {
        type: ADD_SCHEDULE_CLOSE_DIALOG
      }
    );
  });
});