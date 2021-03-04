import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
import "./style.css";

const SignIn = ({
  authValue: {
    form: { email, password },
    isStartEdit,
  },
  signIn,
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
                fontWeight="normal"
              >
                サインイン
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
                variant="contained"
                color="primary"
                type="submit"
                className="button"
                disabled={!email || !password}
                onClick={() => { signIn(); history.push("/"); }}
              >
                サインイン
              </Button>
            </Grid>
            <br />
            <Link to="/signup">
              <Grid item>
                <Typography
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="button"
                >
                  ユーザー登録はこちら
                </Typography>
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
