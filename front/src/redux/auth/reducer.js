import { AUTH_SET_VALUE, AUTH_SIGN_IN, AUTH_SIGN_UP, AUTH_SIGN_OUT } from "./actions";

const init = {
  form: {
    name: "",
    email: "",
    password: "",
  },
  isStartEdit: false,
};

const authReducer = (state = init, action) => {
  switch (action.type) {
  case AUTH_SET_VALUE:
    return { ...state, form: { ...state.form, ...action.payload } };
  case AUTH_SIGN_IN:
    return { ...state, form: { ...state.form, ...action.payload } };
  case AUTH_SIGN_UP:
    return { ...state, form: { ...state.form, ...action.payload } };
  case AUTH_SIGN_OUT:
    return state
  default:
    return state;
  }
};

export default authReducer;
