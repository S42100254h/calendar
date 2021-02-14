import React from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";

const Login = () => {
  return (
    <div>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid container direction="column" justify="center" spacing={2} className="login-form">
            <Grid item>
              <Typography
                component="h1"
                variant="h5"
              >
                ログイン
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                type="name"
                placeholder="ユーザー名"
                fullWidth
                name="username"
                variant="outlined"
                value=""
                required
                autoFocus
              />
            </Grid>
            <Grid item>
              <TextField
                type="email"
                placeholder="Eメール"
                fullWidth
                name="email"
                variant="outlined"
                value=""
                required
                autoFocus
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                placeholder="パスワード"
                fullWidth
                name="password"
                variant="outlined"
                value=""
                required
                autoFocus
              />
            </Grid>
            <Grid item>
              <Button
                varinat="contained"
                color="primary"
                type="submit"
                className="button"
              >
                送信
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
