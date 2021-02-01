import addScheduleReducer from "../../../redux/addSchedule/reducer";
import { addScheduleSetValue, addScheduleOpenDialog, addScheduleCloseDialog } from "../../../redux/addSchedule/actions";
import Faker from "faker";

describe("addScheduleReducerのテスト", () => {

  const init = {
    form: {
      title: Faker.lorem.word(),
      description: Faker.lorem.text(),
      date: Faker.date.recent(),
      location: Faker.random.locale(),
    },
    isDialogOpen: false,
  };

  it("action.type === ADD_SCHEDULE_SET_VALUEの時のテスト", () => {
    const dummy = { title: "ダミータイトル" };
    const action = addScheduleSetValue(dummy);
    const newState = addScheduleReducer(init, action);

    expect(newState.form.title).toStrictEqual(dummy.title);
    expect(newState.form.description).toStrictEqual(init.form.description);
    expect(newState.form.date).toStrictEqual(init.form.date);
    expect(newState.form.location).toStrictEqual(init.form.location);
  });

  it("action.type === ADD_SCHEDULE_OPEN_DIALOGの時のテスト", () => {
    const action = addScheduleOpenDialog();
    const newState = addScheduleReducer(init, action);

    expect(newState.isDialogOpen).toStrictEqual(true);
    expect(newState.form).toStrictEqual(init.form);
  });

  it("action.type === ADD_SCHEDULE_CLOSE_DIALOGの時のテスト", () => {
    const action = addScheduleCloseDialog();
    const newState = addScheduleReducer(init, action);
    
    expect(newState.isDialogOpen).toStrictEqual(init.isDialogOpen);
  });
});