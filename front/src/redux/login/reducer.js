import { LOGIN_SET_VALUE } from "./actions";

const init = {
  form: {
    name: "",
    email: "",
    password: "",
  },
  isStartEdit: false,
};

const loginReducer = (state = init, action) => {
  switch (action.type) {
  case LOGIN_SET_VALUE:
    return { ...state, form: { ...state.form, ...action.payload } };
  default:
    return state;
  }
};

export default loginReducer;
