import { Dispatch, ReactChild, ReactChildren } from "react";

export interface StoreProps {
  children?: ReactChildren | ReactChild | undefined;
}

export interface Action<T, V> {
  type: T;
  payload: {
    key?: string;
    value: V;
  };
}

export interface SliceState<T, V> {
  state: T;
  dispatch: Dispatch<V>;
}
