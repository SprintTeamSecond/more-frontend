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
  const [users, setUsers] = useState([]);
  const Userdata = async () => {
    const response: AxiosResponse<any> = await axios.get(
      'https://api.github.com/user',
      {
        headers: {
          Authorization: `token`,
        },
      },
    );
    let res = response.data.data;
    const data = res.map((u: any) => {
      let userState = {
        username: u.username,
        email: u.email,
        avatar: u.avatar,
      };
      return userState;
    });
    return data;
  };

  useEffect(() => {
    Userdata().then((res) => {
      setUsers(res);
    });
  }, [datas]);

  return {users};
};

export default useProfile;
