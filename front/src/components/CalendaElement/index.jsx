import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";

const CalendarElement = ({ children }) => {
  return (
    <div className="element">
      <Typography
        className="date"
        align="center"
        variant="caption"
        component="div"
      >
        { children }
      </Typography>
    </div>
  );
};

export default CalendarElement;
