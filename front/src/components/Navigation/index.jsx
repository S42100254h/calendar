import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { IconButton, Toolbar, Typography, Tooltip } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import "./style.css";

const Navigation = ({ setNextMonth, setPreviousMonth, setMonth, month }) => {
  return (
    <Toolbar className="toolbar">
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <CalendarTodayIcon />
      <Typography className="tool" color="textSecondary" variant="h5" component="h1">
        カレンダー
      </Typography>
      <Tooltip title="前の月" placement="bottom">
        <IconButton size="small" onClick={setPreviousMonth}>
          <ArrowBackIos />
        </IconButton>
      </Tooltip>
      <Tooltip title="次の月" placement="bottom">
        <IconButton size="small" onClick={setNextMonth}>
          <ArrowForwardIos />
        </IconButton>
      </Tooltip>
      <DatePicker
        className="datepicker"
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY年M月"
        animateYearScrolling
        disableToolbar
        autoOk="true"
      />
    </Toolbar>
  );
};

export default Navigation;
