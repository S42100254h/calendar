import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { IconButton, Toolbar, Typography } from "@material-ui/core";
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
      <IconButton size="small" onClick={setPreviousMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small" onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
      <DatePicker
        className="datepicker"
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY年M月"
        animateYearScrolling
        disableToolbar
      />
    </Toolbar>
  );
};

export default Navigation;
