import {
  AUTH_SET_VALUE,
  AUTH_SIGN_IN,
  AUTH_SIGN_UP,
  AUTH_SIGN_OUT,
  authSetValue,
  authSignIn,
  authSignUp,
  authSignOut,
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
        type: AUTH_SIGN_IN,
        payload: dummy
      }
    );
  });

  it("authSignUpのテスト", () => {
    const dummy = { name: "neko", email: "nekoneko@gmail.com", password: "nekowanko" };
    const action = authSignUp(dummy);

    expect(action).toStrictEqual(
      {
        type: AUTH_SIGN_UP,
        payload: dummy
      }
    )
  });

  it("authSignOutのテスト", () => {
    const action = authSignOut();

    expect(action).toStrictEqual(
      {
        type: AUTH_SIGN_OUT
      }
    )
  });
});
