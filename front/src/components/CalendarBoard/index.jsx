import React from "react";
import { GridList } from "@material-ui/core";
import "./style.css";

const createCalendar = () => {
  return Array(35).fill(0).map((_, i) => i);
};

const calendar = createCalendar();

const CalendarBoard = () => {
  return (
    <div className="container">
      <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
        {calendar.map((c) => {
          return (
            <li>
              <div className="element">{c}</div>
            </li>
          );
        })}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
