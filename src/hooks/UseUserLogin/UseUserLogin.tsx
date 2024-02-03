import { updateLoginInfo } from 'src/store/reducers/UserInfoReducer';
import { useUserInfoContext } from 'src/store/slices/UserInfoSlice';
import { useCallback } from 'react';
import axios from 'axios';

export type userLoginResult = {
  dispatchUserLogin: (newUsernameValue: string, newPassword: string) => void;
};

function useUserLogin(): userLoginResult {
  const { dispatch: userLoginDispatch } = useUserInfoContext();

  const dispatchUserLogin = useCallback(
    (newUsername: string, newPassword: string) => {
      userLoginDispatch(updateLoginInfo('username', newUsername));
      userLoginDispatch(updateLoginInfo('password', newPassword));
      // eslint-disable-next-line no-console
      axios
        .post('https://localhost:32770/login', {
          username: newUsername,
          password: newPassword,
        })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response.data);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    [userLoginDispatch],
  );

  return {
    dispatchUserLogin,
  };
}

export default useUserLogin;
