import React from 'react';
import styled, {DefaultTheme, useTheme} from 'styled-components';
import axios from 'axios';
import {GithubIcon} from '../components/Icon';
import Typography from '../components/atoms/typography';

const GITHUB_END_POINT = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/callback`;

type OauthParameterType = {
  clientId: string | undefined;
};

const Login = () => {
  return (
    <S.Container>
      <Typography weight={'700'} color="#212121" marginBottom={24}>
        모두의 레포지토리 MO:RE
      </Typography>
      <Typography weight={'500'} color={'##4D4D4D'} marginBottom={48}>
        Github 계정으로 자랑하고 싶은 내 레포지토리를 올려 볼까요?
      </Typography>
      <S.LoginButton onClick={() => window.location.replace(GITHUB_END_POINT)}>
        <GithubIcon />
        <Typography size="13">Github 계정으로 로그인</Typography>
      </S.LoginButton>
    </S.Container>
  );
};

export default Login;

const S = {
  Container: styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  LoginButton: styled.button`
    display: flex;
    height: 100%;
    align-items: center;
    display: flex;
    padding: 20px 90px;
    gap: 10px;
    border: 1px solid #abbed1;
    border-radius: 8px;
  `,
};
