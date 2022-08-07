import {useAuth, useLocalStorage} from 'src/hooks';
import styled, {useTheme} from 'styled-components';
import {UserIcon, Button} from 'src/components/atoms';
import Typography from 'src/components/atoms/typography';
import {useNavigate} from 'react-router-dom';
import {Tab} from 'src/components/Tabui';

const ProfilePage = () => {
  const navigate = useNavigate();
  const {
    colors: {
      neutral: {BLACK, DARK_GREY, GREY_BLUE, WHITE, LIGHT_GREY, LIGHT_GREY_BLUE},
      primary: {MEDIUM_BLUE},
    },
  } = useTheme();
  const {userData, setUserData, setIsLoggedIn} = useAuth();

  const logout = () => {
    useLocalStorage({method: 'del', key: 'ACCESS_TOKEN'});
    setUserData(null);
    setIsLoggedIn(false);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
      <ProfileStyle.Section>
        <div className="left-section">
          <UserIcon />
          <ProfileStyle.Detail>
            <div className="user-section">
              <Typography weight="400" size="18" color={BLACK}>
                {userData?.name}
              </Typography>
              <Typography>
                <Typography weight={'400'} size="18" color={DARK_GREY}>
                  팔로잉
                </Typography>
                <Typography weight={'700'} size="18" color={MEDIUM_BLUE}>
                  {12}
                </Typography>
              </Typography>
              <Typography>
                <Typography weight={'400'} size="18" color={DARK_GREY}>
                  팔로워
                </Typography>
                <Typography weight={'700'} size="18" color={MEDIUM_BLUE}>
                  {123}
                </Typography>
              </Typography>
            </div>
            <Typography size="18" color={BLACK} weight="400">
              나를 소개하는 한 줄 소개 입니다 몇자나 소개하면 좋을까요
            </Typography>
          </ProfileStyle.Detail>
        </div>
        <div className="button-section">
          <Button
            padding={'8px 16px'}
            borderRadius={'24'}
            borderColor={LIGHT_GREY_BLUE}>
            <Typography weight="500" size="16" color={LIGHT_GREY}>
              프로필 수정
            </Typography>
          </Button>
          <Button
            onClick={logout}
            padding={'8px 16px'}
            borderRadius={'24'}
            borderColor={LIGHT_GREY_BLUE}>
            <Typography weight="500" size="16" color={LIGHT_GREY}>
              로그아웃
            </Typography>
          </Button>
        </div>
      </ProfileStyle.Section>
      <Tab />
      <ProfileStyle.TabContent>
        <Typography
          size={'18'}
          weight={'500'}
          color={DARK_GREY}
          marginBottom={48}
          style={{lineHeight: '160%', textAlign: 'center'}}>
          아직 레포지토리를 올리지 않았어요
          <br />내 레포지토리를 자랑해볼까요?
        </Typography>
        <Button
          backgroundColor={MEDIUM_BLUE}
          borderRadius={'25'}
          borderColor={GREY_BLUE}
          color={WHITE}
          width={'254'}
          height={'50'}
          onClick={() => navigate('/post/new', {replace: true})}>
          지금 올리러 가기
        </Button>
      </ProfileStyle.TabContent>
    </div>
  );
};

export default ProfilePage;

const ProfileStyle = {
  Container: styled.div``,
  Section: styled.div`
    width: 100%;
    padding: 64px 0;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    .left-section {
      display: flex;
      gap: 32px;
      align-items: center;
    }
    .user-section {
      display: flex;
      align-items: center;
      gap: 32px;

      & > * {
        display: flex;
        gap: 8px;
      }
    }
    .button-section {
      display: flex;
      gap: 12px;
    }
  `,
  Detail: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  TabContent: styled.div`
    display: flex;

    flex: 20;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
  `,
  Icon: styled.div`
    display: flex;
    flex: 1;
    margin-right: 30px;
  `,
};
