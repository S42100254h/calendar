import React from "react";
import "./style.css";
import dayjs from "dayjs";
import { Typography } from "@material-ui/core";
import { isSameDay, isSameMonth, isFirstDay } from "../../services/calendar";

const CalendarElement = ({ day, month }) => {
  // 各月の１日だけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D";

  // 当日かどうか判断
  const today = dayjs();
  const isToday = isSameDay(day, today);

  // 今月以外をグレーダウンする
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  return (
    <div className="element">
      <Typography
        className="date"
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? "today" : ""}>
          { day.format(format) }
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
