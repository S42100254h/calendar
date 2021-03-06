import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";

const SignUp = ({
  authValue: {
    form: { name, email, password },
    isStartEdit,
  },
  signUp,
  setValue,
}) => {
  const history = useHistory();
  return (
    <div>
      <Grid container justify="center" direction="row">
        <Grid item>
          <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
            <Grid item>
              <Typography
                component="h1"
                variant="h5"
              >
                登録
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                type="name"
                placeholder="ユーザー名"
                fullWidth
                name="username"
                variant="outlined"
                value={name}
                onChange={(e) => setValue({ name: e.target.value })}
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
                variant="contained"
                color="primary"
                type="submit"
                className="button"
                onClick={() => { signUp(); history.push("/"); }}
                disabled={!name || !email || !password}
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

export default SignUp;
