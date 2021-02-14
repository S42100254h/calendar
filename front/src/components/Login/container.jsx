import { connect } from "react-redux";
import Login from "./index";
import loginSetValue from "../../redux/login/actions";

const mapDispatchToProps = (dispatch) => ({
  setLogin: (value) => {
    dispatch(loginSetValue(value));
  },
});

export default connect(mapDispatchToProps)(Login);
