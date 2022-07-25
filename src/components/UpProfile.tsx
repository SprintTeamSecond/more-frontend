import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';
import {GithubUser} from '../types';
import {useRecoilState} from 'recoil';
import {authState, userState} from '../states';
import GithubRepository from '../repository/github';
import useProfile from '../hook/useProfile';

const UpProfile = () => {
  const [userList, setuserList] = useRecoilState(userState);
  const profile = useProfile({userList});
  return (
    <>
      <div>
        <div>username:{profile?.userList?.name}</div>
        <div>id:{profile?.userList?.id}</div>
        <div>avatar:{profile?.userList?.avatar}</div>
      </div>
    </>
  );
};

export default UpProfile;
