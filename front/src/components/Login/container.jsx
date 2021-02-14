import { connect } from "react-redux";
import Login from "./index";
import loginSetValue from "../../redux/login/actions";
import { asyncLoginSetValue } from "../../redux/login/effects";

const mapStateToProps = (state) => ({ loginValue: state.login });

const mapDispatchToProps = (dispatch) => ({
  setLogin: (value) => {
    dispatch(loginSetValue(value));
  },
  login: (loginValue) => {
    dispatch(asyncLoginSetValue());
  },
});

const mergeProps = (stateProps, dispatchProps) => {
  const { loginValue: { form: loginValue }} = stateProps;
  const { login } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    login: () => {
      dispatchProps.login(loginValue);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Login);
