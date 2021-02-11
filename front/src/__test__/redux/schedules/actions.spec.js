import { SCHEDULES_ADD_ITEM,
  SCHEDULE_FETCH_ITEM,
  SCHEDULE_SET_LOADING,
  SCHEDULE_DELETE_ITEM,
  schedulesAddItem,
  schedulesFetchItem,
  schedulesSetLoading,
  schedulesDeleteItem,
} from "../../../redux/schedules/actions";

describe("actions.jsのテスト", () => {
  it("schedulesAddItemのテスト", () => {
    const dummy = { month: 2, year: 2021 };
    const action = schedulesAddItem(dummy);

    expect(action).toStrictEqual(
      {
        type: SCHEDULES_ADD_ITEM,
        payload: dummy,
      }
    );
  });

  it("schedulesFetchItemのテスト", () => {
    const dummy = { month: 2, year: 2021 };
    const action = schedulesFetchItem(dummy);

    expect(action).toStrictEqual(
      {
        type: SCHEDULE_FETCH_ITEM,
        payload: dummy,
      }
    );
  });

  it("schedulesSetLoadingのテスト", () => {
    const action = schedulesSetLoading();

    expect(action).toStrictEqual(
      {
        type: SCHEDULE_SET_LOADING,
      }
    );
  });

  it("schedulesDeleteItemのテスト", () => {
    const dummy = { month: 2, year: 2021 };
    const action = schedulesDeleteItem(dummy);

    expect(action).toStrictEqual(
      {
        type: SCHEDULE_DELETE_ITEM,
        payload: dummy,
      }
    );
  });
});
