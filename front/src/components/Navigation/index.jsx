import React from "react";
import { DatePicker } from "@material-ui/pickers";
import { IconButton, Toolbar, Typography, Tooltip, Button, Grid } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import "./style.css";

const Navigation = ({ setNextMonth, setPreviousMonth, setMonth, month, signOut }) => {
  return (
    <Toolbar className="toolbar">
      <Grid container justify="space-between">
        <Grid item>
          <Grid container spacing={0} alignItems="center">
            <Grid item>
              <IconButton>
                <DehazeIcon />
              </IconButton>
            </Grid>
            <Grid>
              <CalendarTodayIcon />
            </Grid>
            <Grid>
              <Typography className="tool" color="textSecondary" variant="h5" component="h1">
                カレンダー
              </Typography>
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={signOut}>
            ログアウト
          </Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Navigation;
