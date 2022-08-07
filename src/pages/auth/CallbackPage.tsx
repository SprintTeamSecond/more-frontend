import * as React from 'react';
import qs from 'qs';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

import {GithubRepository} from 'src/repository';
import {useAuth, useLocalStorage} from 'src/hooks';
import {Typography} from 'src/components';

const CallbackPage = () => {
  const navigate = useNavigate();
  const {setUserData, setIsLoggedIn} = useAuth();

  const getGithubAccessToken = async () => {
    const {code} = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    const token = await GithubRepository.getAccessToken(code);
    useLocalStorage({method: 'set', key: 'ACCESS_TOKEN', data: token});
    localStorage.setItem('ACCESS_TOKEN', token);
    const {data} = await GithubRepository.getUser(token);
    if (data) {
      setUserData(data);
      setIsLoggedIn(true);
      navigate('/');
    } else throw new Error('로그인 실패');
  };

  React.useEffect(() => {
    try {
      getGithubAccessToken();
    } catch (error) {
      alert(error);
    }
  }, [location]);
  return (
    <CallbackStyle.Container>
      <Typography>깃허브로 로그인 중입니다</Typography>
    </CallbackStyle.Container>
  );
};

export default CallbackPage;

const CallbackStyle = {
  Container: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};
