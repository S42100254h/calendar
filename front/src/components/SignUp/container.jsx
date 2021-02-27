import { connect } from "react-redux";
import SignUp from "./index";
import { authSetValue } from "../../redux/auth/actions";
import { asyncAuthSignUp } from "../../redux/auth/effects";

const mapStateToProps = (state) => ({ authValue: state.auth });

const mapDispatchToProps = (dispatch) => ({
  setValue: (value) => {
    dispatch(authSetValue(value));
  },
  signUp: (value) => {
    dispatch(asyncAuthSignUp(value));
  },
});

const mergeProps = (stateProps, dispatchProps) => {
  const { authValue: { form: authValue } } = stateProps;
  const { setValue, signUp } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    signUp: () => {
      dispatchProps.signUp(authValue);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SignUp);
