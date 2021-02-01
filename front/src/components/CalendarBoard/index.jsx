import React from "react";
import { GridList, Typography } from "@material-ui/core";
import "./style.css";
import CalendarElement from "../CalendaElement";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar, month, openAddScheduleDialog }) => {
  return (
    <div className="container">
      <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li key={d.toString()}>
            <Typography
              className="days"
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}

        {calendar.map((c) => {
          return (
            <li key={c.toString()} onClick={() => openAddScheduleDialog(c)}>
              <CalendarElement day={c} month={month} />
            </li>
          );
        })}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
