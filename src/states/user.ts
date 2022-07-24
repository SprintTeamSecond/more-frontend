import {GithubUser} from './../types/index';
import {atom, RecoilValue} from 'recoil';

export const userState = atom<GithubUser>({
  key: 'userState',
  default: {
    id: '',
    name: '',
    url: '',
    introduce: '',
    github_email: '',
    avatar: '',
  },
});
