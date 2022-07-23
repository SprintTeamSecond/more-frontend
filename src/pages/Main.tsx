import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Typography from '../components/atoms/typography';
import CardItem from '../components/CardItem';
import {GithubPost, PostEntity} from '../types';

const Main = () => {
  const [cardList, setCardList] = useState<GithubPost[]>(dummyData);

  return (
    <S.Container>
      <div className="banner">
        <div className="bannerText">
          <Typography size="32" weight="700" color="#212121" marginBottom={24}>
            모두의 레포지토리 MO:RE
          </Typography>
          <Typography size="22" weight="500" color="#212121">
            자랑스러운 나의 레포지토리를 올리고 다른 사람들과 공유해보세요!
          </Typography>
        </div>
        <button className="uploadButton">
          <Typography size="18" weight="700" color="#FFFFFF">
            지금 올리러 가기
          </Typography>
        </button>
      </div>
      <div className="cardList">
        {cardList.map((data) => {
          return <CardItem data={data}></CardItem>;
        })}
      </div>
    </S.Container>
  );
};
export default Main;

const S = {
  Container: styled.div`
    .cardList {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      row-gap: 48px;
    }
    .banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 100px 0 128px 0;
    }
    .uploadButton {
      width: 254px;
      height: 50px;
      background: #0671e0;
      border-radius: 25px;
      text-align: center;
      cursor: pointer;
    }
  `,
};

const dummyData: GithubPost[] = [
  {
    _id: 'asd',
    title: '포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: ['html', 'css', 'javascript'],
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    star: 12,
    author: {id: '유저 이름'},
    github_url: 'asd',
  },
  {
    _id: 'asd',
    title: '포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: ['html', 'css', 'javascript'],
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    star: 12,
    author: {id: '유저 이름'},
    github_url: 'asd',
  },
  {
    _id: 'asd',
    title: '포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: ['html', 'css', 'javascript'],
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    star: 12,
    author: {id: '유저 이름'},
    github_url: 'asd',
  },
  {
    _id: 'asd',
    title: '포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: ['html', 'css', 'javascript'],
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    star: 12,
    author: {id: '유저 이름'},
    github_url: 'asd',
  },
  {
    _id: 'asd',
    title: '포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: ['html', 'css', 'javascript'],
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    star: 12,
    author: {id: '유저 이름'},
    github_url: 'asd',
  },
];
