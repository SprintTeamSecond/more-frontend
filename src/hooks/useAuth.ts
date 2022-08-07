import React from 'react';
import {useRecoilState} from 'recoil';

import {authState, userState} from 'src/states';
import GithubRepository from 'src/repository/github';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);
  const [userData, setUserData] = useRecoilState(userState);

  const getUser = async (token: string) => {
    const {data} = await GithubRepository.getUser(token);
    setIsLoggedIn(true);
    setUserData(data);
  };
  React.useEffect(() => {
    const token = window.localStorage.getItem('ACCESS_TOKEN');
    if (token) {
      getUser(token);
    }
  }, []);
  return {isLoggedIn, userData, setIsLoggedIn, setUserData};
};
