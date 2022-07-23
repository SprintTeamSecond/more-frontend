import * as React from 'react';
import qs from 'qs';
import styled from 'styled-components';
import GithubRepository from '../repository/github';
import {useNavigate} from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const getGithubAccessToken = async () => {
      const {code} = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      const token = await GithubRepository.getAccessToken(code);
      localStorage.setItem('ACCESS_TOKEN', token);
      const {data} = await GithubRepository.getUser(token);
      console.log('info', data);
      // 성공시 로직
      // 리코일 로그인 상태 변경
      //navigate("?/mainpage")
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
