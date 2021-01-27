import React from "react";
import { GridList } from "@material-ui/core";
import "./style.css";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import CalendarElement from "../CalendaElement";

dayjs.locale("ja");

const createCalendar = () => {
  // 今月の最初の日を追加
  const firstDay = dayjs().startOf("month");
  // 最初の日の曜日のindexを取得
  const firstDayIndex = firstDay.day();

  return Array(35).fill(0).map((_, i) => {
    const diffFromDay = i - firstDayIndex;
    const day = firstDay.add(diffFromDay, "day");
    return day;
  });
};

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
