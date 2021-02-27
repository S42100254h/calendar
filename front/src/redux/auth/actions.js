export const AUTH_SET_VALUE = "AUTH_SET_VALUE";
export const AUTH_SIGN_IN = "AUTH_SIGN_IN";

export const authSetValue = (payload) => ({
  type: AUTH_SET_VALUE,
  payload,
});

export const authSignIn = (payload) => ({
  type: AUTH_SIGN_IN,
  payload,
});
