export const LOGIN_SET_VALUE = "LOGIN_SET_VALUE";
export const LOGIN_POST = "LOGIN_POST";

export const loginSetValue = (payload) => ({
  type: LOGIN_SET_VALUE,
  payload,
});

export const loginPost = (payload) => ({
  type: LOGIN_POST,
  payload,
});
