import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Typography from './atoms/typography';
import {UserIcon, PostIcon, SearchIcon} from './Icon';
interface HeaderProps {
  children?: React.ReactNode;
}

import {useRecoilState, useRecoilValue} from 'recoil';
import {authState} from '../states/auth';

const Header: React.FunctionComponent<HeaderProps> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);
  const navigate = useNavigate();
  return (
    <S.Container>
      <span className="MORE_LOGO" onClick={() => navigate('/', {replace: true})}>
        MO:RE
      </span>
      <div className="right-section">
        <form className="right-search-section" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="어떤 기술스택의 레포지토리를 찾으시나요?" />
          <button type="submit">
            <SearchIcon className="searchIcon" />
          </button>
        </form>
        {isLoggedIn ? (
          <section className="right-user-section">
            <UserIcon />
            <PostIcon />
          </section>
        ) : (
          <section className="right-login-section">
            <button onClick={() => navigate('/login', {replace: true})}>
              <Typography size="16" weight="700" color="#FFFFFF">
                LOG IN
              </Typography>
            </button>
          </section>
        )}
      </div>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    width: 62%;
    padding: 22px;

    .right-section {
      display: flex;
      align-items: center;
      & > section {
        margin-left: 24px;
      }
      .right-search-section {
        display: flex;
        align-items: center;
        padding: 14.5px;
        width: 598px;
        height: 44px;
        position: relative;
        background: #eef5fc;
        border-radius: 8px;
        input {
          width: 100%;
        }
      }
      .right-login-section button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 16px;

        cursor: pointer;

        width: 88px;
        height: 36px;

        background: #0671e0;

        border: 1px solid #0671e0;
        border-radius: 24px;
      }
      .right-user-section {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        & > * {
          cursor: pointer;
        }
      }
    }
    .MORE_LOGO {
      font-family: 'SUIT-Heavy';
      font-style: normal;
      font-weight: 900;
      font-size: 27px;
      line-height: 34px;

      cursor: pointer;
    }
  `,
};

export default Header;
