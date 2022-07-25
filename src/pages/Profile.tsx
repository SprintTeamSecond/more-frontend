import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';
import {GithubUser} from '../types';
import {useRecoilState} from 'recoil';
import {authState, userState} from '../states';
import useProfile from '../hook/useProfile';
import styled, {useTheme} from 'styled-components';
import {UserIcon, Button} from '../components/atoms';
import Typography from '../components/atoms/typography';
import {Tab} from '../components';
import {useNavigate} from 'react-router-dom';
import {Tabui} from '../components/Tabui';

const Profile = () => {
  const [user, setUser] = useRecoilState(userState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);
  const navigate = useNavigate();
  const {
    colors: {
      neutral: {BLACK, DARK_GREY, GREY_BLUE, WHITE, LIGHT_GREY_BLUE},
      primary: {MEDIUM_BLUE},
    },
  } = useTheme();

  const [userList, setuserList] = useRecoilState(userState);
  const profile = useProfile(userList);
  const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    setUser(null);
    setIsLoggedIn(false);
  };
  return (
    <>
      <S.ProfileContainer>
        {/* 아바타:{profile.userList.avatar} */}
        <S.Avatar>
          <UserIcon />
        </S.Avatar>
        <S.Avatar className="Introduce">
          {profile?.userList?.name}
          <br />
          <br />
          나를 소개하는 한 줄 소개 입니다 몇자나 소개하면 좋을까요
        </S.Avatar>
        <S.Avatar>
          <Button
            backgroundColor={WHITE}
            borderRadius={'8'}
            borderColor={GREY_BLUE}
            width={'106'}
            height={'32'}>
            프로필 수정
          </Button>
        </S.Avatar>
        <S.Avatar>
          <Button
            onClick={logout}
            backgroundColor={WHITE}
            borderRadius={'8'}
            borderColor={GREY_BLUE}
            width={'106'}
            height={'32'}>
            로그아웃
          </Button>
        </S.Avatar>
      </S.ProfileContainer>
      <S.ProfileContainer>
        <Tabui />
      </S.ProfileContainer>
      <S.ProfileContainer>
        <S.Avatar className="introduce">
          <Typography size={'18'} weight={'500'} marginBottom={1000}>
            아직 레포지토리를 올리지 않았어요
            <br />
            <br /> 내 레포지토리를 자랑해볼까요?
            <br />
            <br />
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
          </Typography>
        </S.Avatar>
      </S.ProfileContainer>
    </>
  );
};

const S = {
  ProfileContainer: styled.div`
    margin-top: 30px;
    margin-right: 20px;
    align-items: left;
    justify-content: center;
    height: 500px;
    display: flex;
    flex: 1;
  `,
  Avatar: styled.div`
    align-items: left;
    margin-left: 15px;
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    .Introduce {
      display: flex;
      flex-direction: column;
    }
  `,
  Icon: styled.div`
    display: flex;
    flex: 1;
    margin-right: 30px;
  `,
};
export default Profile;
