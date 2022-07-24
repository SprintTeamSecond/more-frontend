import React, {useState, useEffect} from 'react';
import styled, {DefaultTheme, useTheme} from 'styled-components';
import axios, {AxiosResponse} from 'axios';
import {GithubUser} from '../types';

type userprofile = {
  email: string;
  avatar: any;
  username: string;
};

const useProfile = (datas: any) => {
  const [userList, setuserList] = useState<userprofile[]>([]);
  const getUserdata = async () => {
    const response: AxiosResponse<any> = await axios.get(
      'https://api.github.com/user',
      {
        headers: {
          Authorization: `token`,
        },
      },
    );
    let res = response.data.data;
    const data = res?.map(({username, email, avatar}: any) => ({
      username,
      email,
      avatar,
    }));
    return data;
  };

  useEffect(() => {
    getUserdata().then((res) => {
      setuserList(res);
    });
  }, [datas]);

  return {userList};
};;

export default useProfile;
