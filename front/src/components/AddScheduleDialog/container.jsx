import { connect } from "react-redux";
import AddScheduleDialog from "./index";

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

export default connect(mapStateToProps)(AddScheduleDialog);
