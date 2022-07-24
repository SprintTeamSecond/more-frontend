import {atom, RecoilValue} from 'recoil';

interface userStateType {
  id?: number | null;
  username?: string | null;
  avatar?: string | null;
  email?: string | null;
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
