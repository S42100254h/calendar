import { connect } from "react-redux";
import Navigation from "./index";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";
import { asyncAuthSignOut, asyncAuthSignUp } from "../../redux/auth/effects";

import { getNextMonth, getPreviousMonth, getMonth, formatMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";

const mapStateToProps = (state) => ({ calendar: state.calendar });

const mapDispatchToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calendarSetMonth(month));
  },
  fetchItem: (month) => {
    dispatch(asyncSchedulesFetchItem(month));
  },
  signOut: () => {
    dispatch(asyncAuthSignOut());
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  // reduxのstateからdayjsインスタンスに変更
  month: getMonth(stateProps.calendar),
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
    dispatchProps.fetchItem(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
    dispatchProps.fetchItem(previousMonth);
  },
  setMonth: (dayObj) => {
    // dayjsインスタンスからreduxのstateに変更
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
    dispatchProps.fetchItem(month);
  },
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Navigation);
