import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import "./Login.scss";

function Login() {
  return (
    <Box id="LoginContainer" component="form" noValidate autoComplete="off">
      <TextField
        sx={{ m: 0.5 }}
        id="userNameTextField"
        label="Username"
        variant="outlined"
      />
      <TextField
        sx={{ m: 0.5 }}
        id="passwordTextField"
        label="Password"
        variant="outlined"
        type="password"
      />
    </Box>
  );
}

export default Login;
