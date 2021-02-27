import React from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";

const SignIn = ({
  authValue: {
    form: { email, password },
    isStartEdit,
  },
  signIn,
  setValue,
}) => {
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
                type="email"
                placeholder="Eメール"
                fullWidth
                name="email"
                variant="outlined"
                value={email}
                onChange={(e) => setValue({ email: e.target.value })}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                placeholder="パスワード"
                fullWidth
                name="password"
                variant="outlined"
                value={password}
                onChange={(e) => setValue({ password: e.target.value })}
                required
              />
            </Grid>
            <Grid item>
              <Button
                varinat="contained"
                color="primary"
                type="submit"
                className="button"
                onClick={signIn}
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

export default SignIn;
