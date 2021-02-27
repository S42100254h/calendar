import { connect } from "react-redux";
import SignIn from "./index";
import { authSetValue } from "../../redux/auth/actions";
import { asyncAuthSignIn } from "../../redux/auth/effects";

const mapStateToProps = (state) => ({ authValue: state.auth });

const mapDispatchToProps = (dispatch) => ({
  setValue: (value) => {
    dispatch(authSetValue(value));
  },
  signIn: (value) => {
    dispatch(asyncAuthSignIn(value));
  },
});

const mergeProps = (stateProps, dispatchProps) => {
  const { authValue: { form: authValue } } = stateProps;

  return {
    ...stateProps,
    ...dispatchProps,
    signIn: () => {
      dispatchProps.signIn(authValue);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SignIn);
