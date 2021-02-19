import { loginPost } from "./actions";
import { post } from "../../services/api";

export const asyncLoginPost = (value) => async (dispatch) => {
  const body = { ...value };
  const result = await post("auth/sign_in", body);

  dispatch(loginPost(result));
};
