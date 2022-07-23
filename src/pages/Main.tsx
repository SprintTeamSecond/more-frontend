import React, {useEffect, useState} from 'react';
import styled, {DefaultTheme, useTheme} from 'styled-components';
import Typography from '../components/atoms/typography';
import CardItem from '../components/CardItem';
import {GithubPost, PostEntity} from '../types';

const Main = () => {
  const theme = useTheme();
  const [cardList, setCardList] = useState<GithubPost[]>([
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
      author: {_id: 'userid1', user: '유저 이름'},
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
      author: {_id: 'userid1', user: '유저 이름'},
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
      author: {_id: 'userid1', user: '유저 이름'},
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
      author: {_id: 'userid1', user: '유저 이름'},
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
      author: {_id: 'userid1', user: '유저 이름'},
      github_url: 'asd',
    },
  ]);

  return (
    <S.Container>
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
    width: 62%;
    margin: 0 auto;

    .cardList {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `,
};
