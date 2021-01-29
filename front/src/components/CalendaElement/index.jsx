import React from "react";
import "./style.css";
import dayjs from "dayjs";
import { Typography } from "@material-ui/core";
import { getMonth } from "../../services/calendar";

const CalendarElement = ({ day, month }) => {
  // 各月の１日を取得
  const isFirstDay = day.date() === 1;
  // 各月の１日だけ月情報をつける
  const format = isFirstDay ? "M月D日" : "D";

  // 当日かどうか判断
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat);

  // 今月以外をグレーダウンする
  const currentMonth = getMonth(month);
  const isCurrentMonth = day.month() === currentMonth.month();
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
