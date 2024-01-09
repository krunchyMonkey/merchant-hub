import { Dispatch, ReactElement } from 'react';

export interface StoreProps {
  children?: ReactElement | undefined;
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
