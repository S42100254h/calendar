import loginReducer from "../../../redux/login/reducer";
import { loginSetValue, loginPost } from "../../../redux/login/actions";
import Faker from "faker";

const init = {
  form: {
    name: "",
    email: "",
    password: "",
  },
  isStartEdit: false,
};

describe("loginReducerのテスト", () => {
  it("action.type === LOGIN_SET_VALUEの時のテスト", () => {
    const dummy = { name: Faker.internet.userName() }
    const action = loginSetValue(dummy);
    const newState = loginReducer(init, action);

    expect(newState.form.name).toStrictEqual(dummy.name);
  });

  it("action.type === loginPostの時のテスト", () => {
    const dummy = {
      name: Faker.internet.userName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    };
    const action = loginPost(dummy);
    const newState = loginReducer(init, action);

    expect(newState.form.name).toStrictEqual(dummy.name);
    expect(newState.form.email).toStrictEqual(dummy.email);
    expect(newState.form.password).toStrictEqual(dummy.password);
  });
});
