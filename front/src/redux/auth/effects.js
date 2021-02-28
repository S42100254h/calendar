import { authSignIn, authSignUp, authSignOut } from "./actions";
import { post, deleteRequest } from "../../services/api";

export const asyncAuthSignIn = (value) => async (dispatch) => {
  const body = { ...value };
  const header = { headers: { "Content-Type": "application/json" } };
  const result = await post("auth/sign_in", body, header);

  dispatch(authSignIn(result));
};

export const asyncAuthSignUp = (value) => async (dispatch) => {
  const body = { ...value };
  const header = { headers: { "Content-Type": "application/json" } };
  const result = await post("auth", body, header);

  dispatch(authSignUp(result));
};

export const asyncAuthSignOut = () => async (dispatch) => {
  const header = {
    headers: {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    },
  };
  await deleteRequest("auth/sign_out", header);

  dispatch(authSignOut());
};
