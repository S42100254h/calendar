import schedulesReducer from "../../../redux/schedules/reducer";
import { schedulesAddItem } from "../../../redux/schedules/actions";
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

describe("schedulesReducerのテスト", () => {
  it("action.type === SCHEDULES_ADD_ITEMの時のテスト", () => {
    const dummy = {
      title: "dummy title",
      description: "dummy description",
      date: "dummy date",
      location: "dummy location",
    };
    const action = schedulesAddItem(dummy);
    const newState = schedulesReducer(init, action);

    expect(newState.items).toStrictEqual([...init.items, { ...dummy }]);
  });
});
