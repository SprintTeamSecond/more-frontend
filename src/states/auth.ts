import { atom, selector } from "recoil";

export const authState = atom({
  key: "auth",
  default: "dddd",
});

export const authSelector = selector({
  key: "ddd",
  get: ({ get }) => {
    const auth = get(authState);

    return `${auth} 님 안녕하세요`;
  },
});
