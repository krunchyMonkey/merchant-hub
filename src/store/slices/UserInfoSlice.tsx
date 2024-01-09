import { createContext, useContext, useReducer } from 'react';
import { SliceState, StoreProps } from '../interfaces';
import userInfoReducer, { UserInfoAction, UserInfoState } from '../reducers/UserInfoReducer';

export type userInfoSliceState = SliceState<UserInfoState, UserInfoAction<unknown>>;

export const UserInfoContext = createContext({
  state: { ...userInfoReducer.initialState },
  dispatch: () => {},
} as userInfoSliceState);

export const useUserInfoContext = () => useContext(UserInfoContext);

function UserInfoSlice({ children }: StoreProps) {
  const [state, dispatch] = useReducer(
    userInfoReducer.redcuer,
    userInfoReducer.initialState,
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserInfoContext.Provider value={{ state, dispatch }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoSlice;
