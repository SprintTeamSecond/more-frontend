import {atom} from 'recoil';

export interface userStateType {
  id: number | null;
  username: string | null;
  avatar: string | null;
  email: string | null;
}

export const userState = atom<userStateType>({
  key: 'userState',
  default: {
    id: null,
    username: null,
    avatar: null,
    email: null,
  },
});
