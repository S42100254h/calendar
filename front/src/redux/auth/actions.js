export const AUTH_SET_VALUE = "AUTH_SET_VALUE";
export const AUTH_SIGN_IN = "AUTH_SIGN_IN";
export const AUTH_SIGN_UP = "AUTH_SIGN_UP";
export const AUTH_SIGN_OUT = "AUTH_SIGN_OUT";

export const authSetValue = (payload) => ({
  type: AUTH_SET_VALUE,
  payload,
});

export const authSignIn = (payload) => ({
  type: AUTH_SIGN_IN,
  payload,
});

export const authSignUp = (payload) => ({
  type: AUTH_SIGN_UP,
  payload,
});

export const authSignOut = () => ({
  type: AUTH_SIGN_OUT,
});
