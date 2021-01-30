import { connect } from "react-redux";
import Navigation from "./index";

import { getNextMonth, getPreviousMonth, getMonth, formatMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";

const mapStateToProps = (state) => ({ calendar: state.calendar });

const mapDispatchToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calendarSetMonth(month));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  // reduxのstateからdayjsインスタンスに変更
  month: getMonth(stateProps.calendar),
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
  },
  setMonth: (dayObj) => {
    // dayjsインスタンスからreduxのstateに変更
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
  },
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Navigation);
