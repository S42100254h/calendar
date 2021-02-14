import React from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";

const Login = ({ login }) => {
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
                value="yuki"
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
                value="sawabe0v0@gmail.com"
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
                value="a8810097"
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
                onClick={login}
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
