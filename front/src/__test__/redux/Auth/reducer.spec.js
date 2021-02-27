import authReducer from "../../../redux/auth/reducer";
import { authSetValue, authSignIn } from "../../../redux/auth/actions";
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

  it("action.type === authSignInの時のテスト", () => {
    const dummy = {
      name: Faker.internet.userName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    };
    const action = authSignIn(dummy);
    const newState = authReducer(init, action);

    expect(newState.form.name).toStrictEqual(dummy.name);
    expect(newState.form.email).toStrictEqual(dummy.email);
    expect(newState.form.password).toStrictEqual(dummy.password);
  });
});
