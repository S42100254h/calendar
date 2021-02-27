import {
  AUTH_SET_VALUE,
  AUTH_SIGN_IN,
  authSetValue,
  authSignIn,
} from "../../../redux/auth/actions";

describe("actions.jsのテスト", () => {
  it("authSetValueのテスト", () => {
    const dummy = { name: "neko", email: "nekoneko@gmail.com", password: "nekowanko" };
    const action = authSetValue(dummy);

    expect(action).toStrictEqual(
      {
        type: AUTH_SET_VALUE,
        payload: dummy
      }
    );
  });

  it("authSignInのテスト", () => {
    const dummy = { name: "neko", email: "nekoneko@gmail.com", password: "nekowanko" };
    const action = authSignIn(dummy);

    expect(action).toStrictEqual(
      {
        type:   AUTH_SIGN_IN,
        payload: dummy
      }
    );
  });
});
