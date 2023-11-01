import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React from "react";
import "./Login.scss";
import SecretTextField from "../Shared/SecretTextField";
import { Button } from "@mui/material";

function Login() {
  const secretTextfieldProps = {
    label: "Password",
    id: "outlined-adornment-password",
  };

  return (
    <Stack spacing={2}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <TextField
        id="userNameTextField"
        label="Username"
        variant="outlined"
        fullWidth
      />
      <SecretTextField {...secretTextfieldProps} />
      <Button variant="contained">Login</Button>
    </Stack>
  );
}

export default Login;
