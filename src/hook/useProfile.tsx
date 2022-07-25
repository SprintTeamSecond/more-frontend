import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';
import {GithubUser} from '../types';
import {useRecoilState} from 'recoil';
import {authState, userState} from '../states';
import GithubRepository from '../repository/github';

type userprofile = {
  userState: GithubUser;
};

const useProfile = (datas: any) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);
  const [userList, setuserList] = useRecoilState(userState);
  const getUser = async (token: string) => {
    const {data} = await GithubRepository.getUser(token);
    setIsLoggedIn(true);
    setuserList(data);
  };
  React.useEffect(() => {
    const token = window.localStorage.getItem('ACCESS_TOKEN');
    if (token) {
      getUser(token);
    }
  }, []);
  return {isLoggedIn, userList};
};
export default useProfile;
