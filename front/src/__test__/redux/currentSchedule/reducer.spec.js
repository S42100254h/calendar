import currentScheduleReducer from "../../../redux/currentSchedule/reducer";
import { currentSchedulesSetItem, currentScheduleOpenDialog, currentScheduleCloseDialog } from "../../../redux/currentSchedule/actions";
import Faker from "faker";

describe("currentScheduleReducerのテスト", () => {
  const init = {
    items: null,
    isDialogOpen: false
  };

  it("action.type === CURRENT_SCHEDULE_SET_ITEMの時のテスト", () => {
    const dummy = {
      title: Faker.lorem.word(),
      description: Faker.lorem.text(),
      date: Faker.date.recent(),
      location: Faker.random.locale(),
    };
    const action = currentSchedulesSetItem(dummy);
    const newState = currentScheduleReducer(init, action);

    expect(newState).toStrictEqual({ ...init, items: dummy });
  });

  it("action.type === CURRENT_SCHEDULE_OPEN_DIALOGのときのテスト", () => {
    const action = currentScheduleOpenDialog();
    const newState = currentScheduleReducer(init, action);

    expect(newState).toStrictEqual({ ...init, isDialogOpen: true });
  });

  it("action.type === CURRENT_SCHEDULE_CLOSE_DIALOG", () => {
    const action = currentScheduleCloseDialog();
    const newState = currentScheduleReducer(init, action);

    expect(newState).toStrictEqual({ ...init, isDialogOpen: false });
  });
});
