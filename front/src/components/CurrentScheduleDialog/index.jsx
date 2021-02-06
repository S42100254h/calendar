import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
  Grid,
  Typography,
} from "@material-ui/core";
import { Close, LocationOnOutlined, NotesOutlined } from "@material-ui/icons";

import "./style.css";

const spacer = (top, bottom) => ({
  margin: `${top}px 0 ${bottom}px 0`,
});

const currentScheduleDialog = ({
  schedule: { items, isDialogOpen },
  closeDialog,
}) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogActions>
        <div className="closeButton">
          <IconButton onClick={closeDialog} size="small">
            <Close />
          </IconButton>
        </div>
      </DialogActions>

      <DialogContent>
        {items && (
          <>
            <div>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 30)}
              >
                <Grid items>
                  <span className="box" />
                </Grid>
                <Grid items xs={10}>
                  <Typography variant="h5" component="h2">
                    {items.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {items.date.format("M月 D日")}
                  </Typography>
                </Grid>
              </Grid>
            </div>

            {items.location && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 4)}
              >
                <Grid items>
                  <LocationOnOutlined />
                </Grid>
                <Grid items xs={10}>
                  <Typography>{items.location}</Typography>
                </Grid>
              </Grid>
            )}
            {items.description && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 4)}
              >
                <Grid items>
                  <NotesOutlined />
                </Grid>
                <Grid items xs={10}>
                  <Typography>{items.description}</Typography>
                </Grid>
              </Grid>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default currentScheduleDialog;
