import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import "./Login.scss";
import SecretTextField from "../Shared/SecretTextField";
import { Button } from "@mui/material";

function Login() {
  return (
    <Box
      id="LoginContainer"
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "inline-flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <TextField
        sx={{ m: 0.5 }}
        id="userNameTextField"
        label="Username"
        variant="outlined"
      />
      <SecretTextField />
    </Box>
  );
}

export default Login;
