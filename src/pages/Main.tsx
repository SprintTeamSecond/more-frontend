import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Typography from '../components/atoms/typography';
import CardItem from '../components/CardItem';
import {GithubPost, PostEntity} from '../types';
import PostRepository from '../repository/post';
import {useNavigate} from 'react-router-dom';
const Main = () => {
  const [cardList, setCardList] = useState<GithubPost[]>(dummyData);

  const navigate = useNavigate();
  useEffect(() => {
    const getPost = async () => {
      const {data} = await PostRepository.getPosts();
      console.log(data);
      setCardList(data);
    };
    try {
      //   getPost();
    } catch {
      console.log('포스트 받기 실패');
    }
  }, []);
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
        <button className="uploadButton" onClick={() => navigate('/post/new')}>
          <Typography size="18" weight="700" color="#FFFFFF">
            지금 올리러 가기
          </Typography>
        </button>
      </div>
      <div className="cardList">
        {cardList.map((data) => {
          return <CardItem key={data.id} data={data} />;
        })}
      </div>
    </S.Container>
  );
};
export default Main;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 104px 0;
    gap: 70px;
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
    }
    .uploadButton {
      width: 254px;
      height: 50px;
      background: #0671e0;
      border-radius: 25px;
      text-align: center;
      cursor: pointer;
    }
    @media (max-width: 1599px) {
      .cardList {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 1023px) {
      .cardList {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `,
};

const dummyData: GithubPost[] = [
  {
    id: 'id1',
    title: '포스트 타이틀',
    post_like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    stars: 12,
    author: '유저 이름',
    url: 'asd',
  },
  {
    id: 'id2',
    title:
      '포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    post_like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    stars: 12,
    author: '유저 이름',
    url: 'asd',
  },
  {
    id: 'id3',
    title:
      '포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    post_like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    stars: 12,
    author: '유저 이름',
    url: 'asd',
  },
  {
    id: 'id4',
    title:
      '포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    post_like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    stars: 12,
    author: '유저 이름',
    url: 'asd',
  },
  {
    id: 'id5',
    title:
      '포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    post_like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    stars: 12,
    author: '유저 이름',
    url: 'asd',
  },
  {
    id: 'id6',
    title: '포스트 타이틀',
    post_like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    stars: 12,
    author: '유저 이름',
    url: 'asd',
  },
  {
    id: 'id7',
    title:
      '포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    post_like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    stars: 12,
    author: '유저 이름',
    url: 'asd',
  },
  {
    id: 'id8',
    title:
      '포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    post_like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    stars: 12,
    author: '유저 이름',
    url: 'asd',
  },
  {
    id: 'id9',
    title:
      '포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    post_like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    stars: 12,
    author: '유저 이름',
    url: 'asd',
  },
  {
    id: 'id10',
    title:
      '포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 포스트 타이틀포스트 타이틀포스트 타이틀포스트 ',
    post_like: 23,
    description:
      '레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다레포에 대한 내용을 포함합니다',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://images.unsplash.com/photo-1658496594141-589b0ec66b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80',
    created_at: '',
    stars: 12,
    author: '유저 이름',
    url: 'asd',
  },
];
