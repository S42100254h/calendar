import {
  LOGIN_SET_VALUE,
  LOGIN_POST,
  loginSetValue,
  loginPost,
} from "../../../redux/login/actions";

describe("actions.jsのテスト", () => {
  it("loginSetValueのテスト", () => {
    const dummy = { name: "neko", email: "nekoneko@gmail.com", password: "nekowanko" };
    const action = loginSetValue(dummy);

    expect(action).toStrictEqual(
      {
        type: LOGIN_SET_VALUE,
        payload: dummy
      }
    );
  });

  it("loginPostのテスト", () => {
    const dummy = { name: "neko", email: "nekoneko@gmail.com", password: "nekowanko" };
    const action = loginPost(dummy);

    expect(action).toStrictEqual(
      {
        type:   LOGIN_POST,
        payload: dummy
      }
    );
  });
});
