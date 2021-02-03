import { SCHEDULES_ADD_ITEM, schedulesAddItem } from "../../../redux/schedules/actions";

describe("actions.jsのテスト", () => {
  it("schedulesAddItemのテスト", () => {
    const dummy = { month: 2, year: 2021 };
    const action = schedulesAddItem(dummy);

    expect(action).toStrictEqual(
      {
        type: SCHEDULES_ADD_ITEM,
        payload: dummy
      }
    );
  });
});
