import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Typography from './atoms/typography';
import {UserIcon, PostIcon, SearchIcon} from './atoms/Icon';
import {Input, Button} from './atoms';
import {useAuth} from '../hooks';
import {useTheme} from 'styled-components';

const Header: React.FunctionComponent = () => {
  const {isLoggedIn} = useAuth();
  const navigate = useNavigate();
  const {
    colors: {
      primary: {MEDIUM_BLUE, LIGHT_BLUE},
    },
  } = useTheme();
  return (
    <S.Wrapper>
      <S.Container>
        <div className="left-section">
          <Typography
            weight="900"
            size="27"
            lineHeight="34"
            onClick={() => navigate('/', {replace: true})}>
            MO:RE
          </Typography>
        </div>
        <div className="right-section">
          <form className="search-section" onSubmit={(e) => e.preventDefault()}>
            <Input
              padding={'14.5'}
              placeholder="어떤 기술스택의 레포지토리를 찾으시나요?"
              backgroundColor={LIGHT_BLUE}
              borderRadius={'14'}
            />
            <Button type="submit">
              <SearchIcon />
            </Button>
          </form>
          {isLoggedIn ? (
            <section className="user-section">
              <Typography onClick={() => navigate('/profile', {replace: true})}>
                <UserIcon />
              </Typography>
              <Typography onClick={() => navigate('/post/new', {replace: true})}>
                <PostIcon />
              </Typography>
            </section>
          ) : (
            <section className="login-section">
              <Button
                padding={'10px 16px'}
                backgroundColor={MEDIUM_BLUE}
                borderColor={MEDIUM_BLUE}
                borderRadius={'24'}
                onClick={() => navigate('/login', {replace: true})}>
                <Typography size="16" weight="700" color="#FFFFFF">
                  LOG IN
                </Typography>
              </Button>
            </section>
          )}
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    background-color: '#fff';
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 2px 11px rgba(113, 113, 113, 0.1);
  `,
  Container: styled.div`
    display: flex;
    flex: 0.6;
    align-items: center;
    justify-content: space-between;
    padding: 22px 0;
    .left-section {
      display: flex;
      flex: 1;
      & > p {
        cursor: pointer;
      }
    }
    .right-section {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
      & > section {
        margin-left: 24px;
      }
      & button {
        cursor: pointer;
      }
      .search-section {
        display: flex;
        flex: 1;
        padding: 15px 16px 15px 12px;
        border-radius: 8px;
        align-items: center;
        position: relative;
        background: #eef5fc;
      }
      .user-section {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 12px;
        & > * {
          cursor: pointer;
        }
      }
    }
  `,
};

export default Header;
