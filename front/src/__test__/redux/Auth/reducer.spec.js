import authReducer from "../../../redux/auth/reducer";
import { authSetValue, authSignIn, authSignUp, authSignOut } from "../../../redux/auth/actions";
import Faker from "faker";

const init = {
  form: {
    name: "",
    email: "",
    password: "",
  },
  isStartEdit: false,
};

describe("authReducerのテスト", () => {
  it("action.type === AUTH_SET_VALUEの時のテスト", () => {
    const dummy = { name: Faker.internet.userName() }
    const action = authSetValue(dummy);
    const newState = authReducer(init, action);

    expect(newState.form.name).toStrictEqual(dummy.name);
  });

  it("action.type === AUTH_SIGN_INの時のテスト", () => {
    const dummy = {
      email: Faker.internet.email(),
      password: Faker.internet.password()
    };
    const action = authSignIn(dummy);
    const newState = authReducer(init, action);

    expect(newState.form.email).toStrictEqual(dummy.email);
    expect(newState.form.password).toStrictEqual(dummy.password);
  });

  it("action.type === AUTH_SIGN_UPの時のテスト", () => {
    const dummy = {
      name: Faker.internet.userName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    };
    const action = authSignUp(dummy);
    const newState = authReducer(init, action);

    expect(newState.form.name).toStrictEqual(dummy.name);
    expect(newState.form.email).toStrictEqual(dummy.email);
    expect(newState.form.password).toStrictEqual(dummy.password);
  });

  it("action.type === AUTH_SIGN_OUTの時のテスト", () => {
    const action = authSignOut();
    const newState = authReducer(init, action);

    expect(newState).toStrictEqual(init);
  });
});
