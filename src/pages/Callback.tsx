import * as React from 'react';
import qs from 'qs';
import styled from 'styled-components';

import {getAccessTokenParams} from '../types/Oauth';
import {GET_GITHUB_ACCESS_TOKEN} from '../repository';

const getAccessToken = async (params: getAccessTokenParams) => {
  return await GET_GITHUB_ACCESS_TOKEN(params);
};

const Callback = () => {
  React.useEffect(() => {
    const getGithubAccessToken = async () => {
      const {code} = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      const params: getAccessTokenParams = {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID as string,
        client_secret: process.env.REACT_APP_GITHUB_SECRET_KEY as string,
        code,
      };
      const data = await GET_GITHUB_ACCESS_TOKEN(params);
      console.log(data);
    };
    try {
      getGithubAccessToken();
    } catch {
      alert('로그인 실패');
    } finally {
    }
  }, [location]);
  return (
    <S.Container>
      <span>깃허브로 로그인 중입니다</span>
    </S.Container>
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
