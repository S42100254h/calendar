import React from "react";
import { GridList, Typography } from "@material-ui/core";
import "./style.css";
import CalendarElement from "../CalendaElement";
import createCalendar from "../../services/calendar";

const calendar = createCalendar();

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = () => {
  return (
    <div className="container">
      <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li>
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
            <li>
              <CalendarElement day={c} />
            </li>
          );
        })}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
