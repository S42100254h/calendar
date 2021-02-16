import { loginSetValue } from "./actions";
import { post } from "../../services/api";

export const asyncLoginSetValue = (value) => async (dispatch) => {
  const body = { ...value };
  const result = await post("auth/sign_in", body);

  dispatch(loginSetValue(result));
};
