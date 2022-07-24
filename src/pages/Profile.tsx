import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';
import {GithubUser} from '../types';
import {useRecoilState} from 'recoil';
import {authState, userState} from '../states';
import useProfile from '../hook/useProfile';
import styled, {useTheme} from 'styled-components';
import {UserIcon, Button} from '../components/atoms';
import Typography from '../components/atoms/typography';
import {gray000} from '@class101/ui/dist/core/Colors';
import {gray200} from '@class101/ui/dist/core/DarkColors';

const Profile = () => {
  const {
    colors: {
      neutral: {BLACK, DARK_GREY, GREY_BLUE, WHITE},
    },
  } = useTheme();

  const [userList, setuserList] = useRecoilState(userState);
  const profile = useProfile(userList);
  return (
    <>
      <S.ProfileContainer>
        {/* 아바타:{profile.userList.avatar} */}
        <S.Avatar>
          <UserIcon />
        </S.Avatar>
        <S.Avatar className="Introduce">
          {profile.userList.name}
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
            backgroundColor={WHITE}
            borderRadius={'8'}
            borderColor={GREY_BLUE}
            width={'106'}
            height={'32'}>
            로그아웃
          </Button>
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
