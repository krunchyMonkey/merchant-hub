import { StoreProps } from './interfaces';
import UserInfoSlice from './slices/UserInfoSlice';

function Store({ children }: StoreProps) {
  return (
    <UserInfoSlice>
      {children}
    </UserInfoSlice>
  );
}

export default Store;
