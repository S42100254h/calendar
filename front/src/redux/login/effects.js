import { loginPost } from "./actions";
import { post } from "../../services/api";

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const asyncLoginPost = (value) => async (dispatch) => {
  const body = { ...value };
  const result = await post("auth/sign_in", body, header);

  dispatch(loginPost(result));
};
