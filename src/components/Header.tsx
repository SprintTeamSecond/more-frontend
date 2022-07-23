import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Typography from './atoms/typography';
import {UserIcon, PostIcon, SearchIcon} from './atoms/Icon';

import {useRecoilValue} from 'recoil';
import {isLoggedInState} from '../states/auth';
import {useTheme} from 'styled-components';
const Header: React.FunctionComponent = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const navigate = useNavigate();
  const {
    colors: {neutral},
  } = useTheme();
  return (
    <div
      style={{
        backgroundColor: neutral.WHITE,
        width: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
      }}>
      <S.Container>
        <span
          className="left-section_logo"
          onClick={() => navigate('/', {replace: true})}>
          MO:RE
        </span>
        <div className="right-section">
          <form
            className="right-search-section"
            onSubmit={(e) => e.preventDefault()}>
            <input placeholder="어떤 기술스택의 레포지토리를 찾으시나요?" />
            <button type="submit">
              <SearchIcon className="searchIcon" />
            </button>
          </form>
          {isLoggedIn ? (
            <section className="right-user-section">
              <div onClick={() => navigate('/profile', {replace: true})}>
                <UserIcon />
              </div>

              <PostIcon />
            </section>
          ) : (
            <section className="right-login-section">
              <button onClick={() => navigate('/login', {replace: true})}>
                <Typography size="16" weight="700" color={neutral.WHITE}>
                  LOG IN
                </Typography>
              </button>
            </section>
          )}
        </div>
      </S.Container>
    </div>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex: 0.6;
    justify-content: space-between;
    padding: 22px 0;
    .left-section_logo {
      flex: 1;
      display: flex;
      align-items: center;
      font-family: 'SUIT-Heavy';
      font-style: normal;
      font-weight: 900;
      font-size: 27px;
      line-height: 34px;

      cursor: pointer;
    }
    .right-section {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
      & > section {
        margin-left: 24px;
      }
      .right-search-section {
        display: flex;
        align-items: center;
        padding: 14.5px;
        flex: 3;
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
        flex: 1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;

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
  `,
};

export default Header;
