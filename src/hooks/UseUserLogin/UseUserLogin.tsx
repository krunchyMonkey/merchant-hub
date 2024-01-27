import { updateLoginInfo } from 'src/store/reducers/UserInfoReducer';
import { useUserInfoContext } from 'src/store/slices/UserInfoSlice';
import { useCallback } from 'react';

export type userLoginResult = {
    dispatchUserLogin: (newUsernameValue: string, newPassword: string) => void;
};

function useUserLogin(): userLoginResult {
  const {
    dispatch: userLoginDispatch,
  } = useUserInfoContext();

  const dispatchUserLogin = useCallback((newUsername: string, newPassword: string) => {
    userLoginDispatch(updateLoginInfo('username', newUsername));
    userLoginDispatch(updateLoginInfo('password', newPassword));
    // eslint-disable-next-line no-console
    console.log(newUsername);
    // eslint-disable-next-line no-console
    console.log(newPassword);
  }, [userLoginDispatch]);

  return {
    dispatchUserLogin,
  };
}

export default useUserLogin;
