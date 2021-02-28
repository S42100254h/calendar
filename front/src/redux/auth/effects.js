import { authSignIn, authSignUp, authSignOut } from "./actions";
import { post } from "../../services/api";

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const asyncAuthSignIn = (value) => async (dispatch) => {
  const body = { ...value };
  const result = await post("auth/sign_in", body, header);

  dispatch(authSignIn(result));
};

export const asyncAuthSignUp = (value) => async (dispatch) => {
  const body = { ...value };
  const result = await post("auth", body, header);

  dispatch(authSignUp(result));
};

export const asyncAuthSignOut = () => async (dispatch) => {
  await delete("auth/sign_out", header);

  dispatch(authSignOut())
};
