import React from "react";
import "./style.css";
import dayjs from "dayjs";
import { Typography } from "@material-ui/core";

const CalendarElement = ({ day }) => {
  // 各月の１日を取得
  const isFirstDay = day.date() === 1;
  // 各月の１日だけ月情報をつける
  const format = isFirstDay ? "M月D日" : "D";

  // 当日かどうか判断
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat);

  return (
    <div className="element">
      <Typography
        className="date"
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
