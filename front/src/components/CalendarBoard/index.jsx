import React from "react";
import { GridList } from "@material-ui/core";
import "./style.css";
import CalendarElement from "../CalendaElement";
import createCalendar from "../../services/calendar";

const calendar = createCalendar();

const CalendarBoard = () => {
  return (
    <div className="container">
      <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
        {calendar.map((c) => {
          return (
            <li>
              <CalendarElement>{c.format("D")}</CalendarElement>
            </li>
          );
        })}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
