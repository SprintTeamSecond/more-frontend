import * as React from 'react';
import qs from 'qs';
import styled from 'styled-components';

import {getAccessTokenParams} from '../types/Oauth';
import {LOGIN_ACTION} from '../repository';
import {useRecoilState} from 'recoil';
import {isLoggedInState} from '../states/auth';

import {useNavigate} from 'react-router-dom';

const Callback = () => {
  const [loading, setLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const handleSignInAction = async () => {
    const {code} = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    const params: getAccessTokenParams = {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID as string,
      client_secret: process.env.REACT_APP_GITHUB_SECRET_KEY as string,
      code,
    };
    const {error, data} = await LOGIN_ACTION(params);
    if (error) throw Error(error);
    if (data.status === 200) {
      setIsLoggedIn(true);
      setLoading(false);
      navigate('/');
      window.localStorage.setItem('isLoggedIn', JSON.stringify(true));
    }
  };
  React.useEffect(() => {
    try {
      handleSignInAction();
    } catch {
      alert('로그인 실패');
    } finally {
    }
  }, [location]);
  if (isLoggedIn) window.location.href = '/';
  return (
    <S.Container>{loading && <span>깃허브로 로그인 중입니다</span>}</S.Container>
  );
};

export default Callback;

const S = {
  Container: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};
