import styled, {useTheme} from 'styled-components';
import {GithubIcon, Button} from '../components/atoms';
import Typography from '../components/atoms/typography';
import GithubRepository from '../repository/github';
import {useNavigate} from 'react-router-dom';
import ENV from '@ENV';

const GITHUB_END_POINT = `https://github.com/login/oauth/authorize?client_id=${ENV.GITHUB_CLIENT_ID}&scope=repo:status read:repo_hook user:email&redirect_uri=${ENV.REDIRECT_URL}`;

import {useRecoilState} from 'recoil';
import {userState, authState} from '../states';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);
  const {
    colors: {
      neutral: {BLACK, DARK_GREY, GREY_BLUE, WHITE},
    },
  } = useTheme();

  const initializing = async () => {
    // localStorage.removeItem('ACCESS_TOKEN');

    const token = localStorage.getItem('ACCESS_TOKEN');

    if (!token) {
      window.location.assign(GITHUB_END_POINT);
    }
    // 액세스 토큰이 있다면 자동 로그인 구현
    const {data} = await GithubRepository.getUser(token as string);
    if (data) {
      setUser(data);
      setIsLoggedIn(true);
      navigate('/');
    }
  };

  return (
    <S.Container>
      <Typography size={'24'} weight={'700'} color={BLACK} marginBottom={24}>
        모두의 레포지토리 MO:RE
      </Typography>
      <Typography size={'18'} weight={'500'} color={DARK_GREY} marginBottom={48}>
        Github 계정으로 자랑하고 싶은 내 레포지토리를 올려 볼까요?
      </Typography>
      <Button
        className="login-button"
        padding={'20px 90px'}
        backgroundColor={WHITE}
        borderRadius={'8'}
        borderColor={GREY_BLUE}
        onClick={initializing}>
        <GithubIcon />
        <Typography size="13">Github 계정으로 로그인</Typography>
      </Button>
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

    .login-button {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  `,
};
