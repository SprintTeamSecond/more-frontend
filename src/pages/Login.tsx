import styled from 'styled-components';
import {GithubIcon} from '../components/atoms/Icon';
import Typography from '../components/atoms/typography';
import GithubRepository from '../repository/github';

const GITHUB_END_POINT = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/callback`;

import {useRecoilState} from 'recoil';
import {authState} from '../states/auth';

const Login = () => {
  const [isLoggedIn, setIseLoggedIn] = useRecoilState(authState);
  const initializing = async () => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (!token) {
      window.location.assign(GITHUB_END_POINT);
    }
    //액세스 토큰이 있다면 자동 로그인 구현
    const {data} = await GithubRepository.getUser(token as string);
    console.log('이니셜라이징', data);
    // recoil state loggedin = true 로 변경
  };

  return (
    <S.Container>
      <Typography size={'24'} weight={'700'} color="#212121" marginBottom={24}>
        모두의 레포지토리 MO:RE
      </Typography>
      <Typography size={'18'} weight={'500'} color="#4D4D4D" marginBottom={48}>
        Github 계정으로 자랑하고 싶은 내 레포지토리를 올려 볼까요?
      </Typography>
      <S.LoginButton onClick={() => initializing()}>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  LoginButton: styled.button`
    display: flex;
    cursor: pointer;
    align-items: center;
    display: flex;
    padding: 20px 90px;
    background-color: #fff;
    gap: 10px;
    border: 1px solid #abbed1;
    border-radius: 8px;
  `,
};
