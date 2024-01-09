/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';

export type secretTextFieldProps = {
  label: string;
  id: string;
  onChangeEvent: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

function SecretTextField({ label, id, onChangeEvent }: secretTextFieldProps) {
  const [showSecret, setShowSecret] = React.useState(false);

  const handleClickShowSecret = () => setShowSecret((show) => !show);

  const handleMouseDownSecret = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="filled-adornment-sercret">{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={showSecret ? 'text' : 'password'}
        fullWidth
        onChange={onChangeEvent}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle sercret visibility"
              onClick={handleClickShowSecret}
              onMouseDown={handleMouseDownSecret}
              edge="end"
            >
              {showSecret ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )}
        label={label}
      />
    </FormControl>
  );
}

export default SecretTextField;
