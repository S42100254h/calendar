import React from "react";
import ReactDOM from "react-dom";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
import ErrorSnackbar from "./components/ErrorSnackbar/container";

const App = () => (
  <MuiPickersUtilsProvider utils={DayjsUtils}>
    <Navigation />
    <CalendarBoard />
    <AddScheduleDialog />
    <CurrentScheduleDialog />
    <ErrorSnackbar />
  </MuiPickersUtilsProvider>
);

export default App;
