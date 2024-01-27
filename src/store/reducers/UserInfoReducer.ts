import { Reducer } from 'react';
import { Action } from '../interfaces/storeCommon';

export type UserInfoState = {
  username?: string | undefined;
  password?: string | undefined;
};

export type UserInfoStateKey = keyof UserInfoState;
export type UserInfoStateValue = UserInfoState[UserInfoStateKey];

const initialState: UserInfoState = {
  username: '',
  password: '',
};

export enum UserInfoActions {
  LoginUser = 0,
}

export type UserInfoAction<T> = Action<UserInfoActions, T>;

export function updateLoginInfo(
  infoKey: UserInfoStateKey,
  newValue: UserInfoStateValue,
): UserInfoAction<UserInfoStateValue> {
  return {
    type: UserInfoActions.LoginUser,
    payload: {
      key: infoKey,
      value: newValue,
    },
  };
}

const redcuer: Reducer<UserInfoState, UserInfoAction<unknown>> = (
  state: UserInfoState,
  action: UserInfoAction<unknown>,
) => {
  const key = action.payload.key as UserInfoStateKey;
  switch (action.type) {
    case UserInfoActions.LoginUser:
      if (state[key] === action.payload.value) return state;
      return {
        ...state,
        [key]: action.payload.value,
      };
    default:
      throw new Error('Merchant Details Context failed to update');
  }
};

const userInfoReducer = { initialState, redcuer };

export default userInfoReducer;
