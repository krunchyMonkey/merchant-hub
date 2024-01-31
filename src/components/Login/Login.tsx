/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import './Login.scss';
import { Button } from '@mui/material';
import useUserLogin from 'src/hooks/useUserLogin';
import SecretTextField from '../Shared/SecretTextField';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const { dispatchUserLogin } = useUserLogin();
  const handleLogin = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    dispatchUserLogin(userName, password);
  };

  return (
    <Stack spacing={2}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <TextField
        onChange={(ev) => setUserName(ev.target.value)}
        id="userNameTextField"
        label="Username"
        variant="outlined"
        fullWidth
      />
      <SecretTextField
        // eslint-disable-next-line max-len
        onChangeEvent={(ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setpassword(ev.target.value)}
        label="Password"
        id="outlined-adornment-password"
      />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </Stack>
  );
}

export default Login;
