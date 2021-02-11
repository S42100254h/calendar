import schedulesReducer from "../../../redux/schedules/reducer";
import {
  schedulesAddItem,
  schedulesFetchItem,
  schedulesSetLoading,
  schedulesDeleteItem
} from "../../../redux/schedules/actions";
import Faker from "faker";

const init = {
  items: [
    {
      title: Faker.lorem.word(),
      description: Faker.lorem.text(),
      date: Faker.date.recent(),
      location: Faker.random.locale(),
    }
  ],
  isLoading: false,
};

const dummy = {
  title: "dummy title",
  description: "dummy description",
  date: "dummy date",
  location: "dummy location",
};

describe("schedulesReducerのテスト", () => {
  it("action.type === SCHEDULES_ADD_ITEMの時のテスト", () => {
    const action = schedulesAddItem(dummy);
    const newState = schedulesReducer(init, action);

    expect(newState.items).toStrictEqual([...init.items, { ...dummy }]);
  });

  it("action.type === schedulesFetchItemの時のテスト", () => {
    const action = schedulesFetchItem(dummy);
    const newState = schedulesReducer(init, action);

    expect(newState.items).toStrictEqual(dummy);
    expect(newState.isLoading).toStrictEqual(false);
  });

  it("action.type === schedulesSetLoadingの時のテスト", () => {
    const action = schedulesSetLoading();
    const newState = schedulesReducer(init, action);

    expect(newState.isLoading).toStrictEqual(true);
    expect(newState.items).toStrictEqual(init.items);
  });

  it("action.type === schedulesDeleteItemの時のテスト", () => {
    const action = schedulesDeleteItem(dummy);
    const newState = schedulesReducer(init, action);

    expect(newState.items).toStrictEqual(dummy)
    expect(newState.isLoading).toStrictEqual(false);
  });
});
