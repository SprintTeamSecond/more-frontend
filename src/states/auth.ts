import {atom, selector} from 'recoil';

export const authState = atom<boolean>({
  key: 'auth',
  default: false,
});

export const authSelector = selector({
  key: 'getIsLoggedIn',
  get: ({get}) => {
    const auth = get(authState);
    return auth;
  },
});
