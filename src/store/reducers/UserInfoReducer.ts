import { Action } from "../interfaces/storeCommon";

export type UserInfoState = {
  userName?: string | undefined;
  password?: string | undefined;
};

export type UserInfoStateKey = keyof UserInfoState;
export type UserInfoStateValue = UserInfoState[UserInfoStateKey];

const initialState: UserInfoState = {
  userName: "",
  password: "",
};

export enum UserInfoActions {
  LoginUser = 0,
}

export type UserInfoAction<T> = Action<UserInfoActions, T>;

export function loginUser(
  infoKey: UserInfoStateKey,
  newValue: UserInfoStateValue
): UserInfoAction<UserInfoStateValue> {
  return {
    type: UserInfoActions.LoginUser,
    payload: {
      key: infoKey,
      value: newValue,
    },
  };
}
