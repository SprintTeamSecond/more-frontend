import React, {useState, useEffect} from 'react';
import styled, {DefaultTheme, useTheme} from 'styled-components';
import axios, {AxiosResponse} from 'axios';
import {GithubUser} from '../types';
import useProfile from '../hook/useProfile';

export type ProfileProps = {
  items?: GithubUser;
};

const Profile = ({items}: ProfileProps) => {
  return (
    <div>
      <span>{items?.github_avatar}</span>
      <span>{items?.github_email}</span>
      <span>{items?.github_username}</span>
    </div>
  );
};

export default Profile;
