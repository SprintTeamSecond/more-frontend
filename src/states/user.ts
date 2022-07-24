import {atom, RecoilValue} from 'recoil';

interface userStateType {
  id?: number | null;
  name?: string | null;
  avatar?: any | null;
  email?: string | null;
}

export const userState = atom<userStateType>({
  key: 'userState',
  default: {
    id: null,
    name: null,
    avatar: null,
    email: null,
  },
});
