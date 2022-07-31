import React, {useEffect, useState} from 'react';
import styled, {useTheme} from 'styled-components';
import Typography from '../components/atoms/typography';
import CardItem from '../components/CardItem';
import {GithubPost, PostEntity} from '../types';
import PostRepository from '../repository/post';
import {useNavigate} from 'react-router-dom';
import {Tag} from '../components/atoms';

const Main = () => {
  const {
    colors: {
      neutral: {WHITE, GREY_BLUE},
      primary: {MEDIUM_BLUE},
    },
  } = useTheme();

  const [cardList, setCardList] = useState<GithubPost[]>(dummyData);
  const [currentTag, setCurrentTag] = useState<string>('ALL');
  const navigate = useNavigate();
  useEffect(() => {
    const getPost = async () => {
      // const {data} = await PostRepository.getPosts();
      // console.log(data);
      // setCardList(data);
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
      <S.TagList>
        {Tags.map(({label, value}) => {
          const isCurrent = currentTag === value;
          return (
            <Tag
              onClick={() => setCurrentTag(value)}
              color={isCurrent ? WHITE : null}
              backgroundColor={isCurrent ? MEDIUM_BLUE : WHITE}>
              {label}
            </Tag>
          );
        })}
      </S.TagList>
      <div className="cardList">
        {cardList.map((data) => {
          return <CardItem key={data.id} data={data} />;
        })}
      </div>
    </S.Container>
  );
};
export default Main;

const Tags: any[] = [
  {label: 'ALL', value: 'ALL'},
  {label: 'Vue', value: 'VUE'},
  {label: 'React', value: 'REACT'},
  {label: 'Java', value: 'JAVA'},
  {label: 'JavaScript', value: 'JAVASCRIPT'},
  {label: 'TypeScript', value: 'TYPESCRIPT'},
  {label: 'Html', value: 'HTML'},
  {label: 'Css', value: 'CSS'},
  {label: 'Swift', value: 'SWIFT'},
];

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
  TagList: styled.ul`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 16px;
    /* padding: 60px 0; */
  `,
};

const dummyData: GithubPost[] = [
  {
    id: 'id1',
    title: 'more-frontend',
    post_like: 23,
    description: '모두의 레포지토리입니다.',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail: `${process.env.PUBLIC_URL}/images/openGraphImage.png`,
    created_at: '',
    stars: 12,
    author: 'wnsguddl789',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
  {
    id: 'id2',
    title: 'typescript-eslint/typescript-eslint',
    post_like: 23,
    description:
      '✨ Monorepo for all the tooling which enables ESLint to support TypeScript',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://opengraph.githubassets.com/5ce4f35c4f48cd4f8ee2507a056507235a2612a2f3132915952d4ade875634a0/typescript-eslint/typescript-eslint',
    created_at: '',
    stars: 12,
    author: 'typescript-eslint',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
  {
    id: 'id3',
    title: 'next-auth-example',
    post_like: 23,
    description: 'About Example showing how to use NextAuth.js with Next.js',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://repository-images.githubusercontent.com/262579731/325861c3-21b2-46e5-90d8-97d0ff23d789',
    created_at: '',
    stars: 12,
    author: 'nextauthjs',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
  {
    id: 'id4',
    title: 'React-Query',
    post_like: 23,
    description:
      '🤖 Powerful asynchronous state management, server-state utilities and data fetching for TS/JS, React, Solid, Svelte and Vue.',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://repository-images.githubusercontent.com/207645083/e5281400-c0a4-11ea-911e-bf5e8aee9f15',
    created_at: '',
    stars: 12,
    author: 'TanStack',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
  {
    id: 'id5',
    title: 'nest',
    post_like: 23,
    description:
      'About A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications on top of TypeScript & JavaScript (ES6, ES7, ES8) 🚀',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://opengraph.githubassets.com/b4ec71543143c7f99dad1b82c0a2fd24c0356fe3a5c306754cc2ce2af483c73d/nestjs/nest',
    created_at: '',
    stars: 12,
    author: 'nestjs',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
  {
    id: 'id6',
    title: 'svelte',
    post_like: 23,
    description: 'Cybernetically enhanced web apps',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://repository-images.githubusercontent.com/74293321/6cef4300-6605-11e9-92a3-9171a14b1e2d',
    created_at: '',
    stars: 12,
    author: 'sveltejs',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
];
