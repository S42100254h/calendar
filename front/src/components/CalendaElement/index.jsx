import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";

const CalendarElement = ({ day }) => {
  // 各月の１日を取得
  const isFirstDay = day.date() === 1;
  // 各月の１日だけ月情報をつける
  const format = isFirstDay ? "M月D日" : "D";

  return (
    <div className="element">
      <Typography
        className="date"
        align="center"
        variant="caption"
        component="div"
      >
        { day.format(format) }
      </Typography>
    </div>
  );
};

export default CalendarElement;
