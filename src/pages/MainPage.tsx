import React from 'react';
import styled, {useTheme} from 'styled-components';
import {useNavigate} from 'react-router-dom';

import {Typography, Tag} from 'src/components/atoms';
import CardItem from 'src/components/CardItem';

import {GithubPost, PostEntity} from 'src/types';
import PostRepository from 'src/repository/post';
import {dummyData} from 'src/constant';

const MainPage = () => {
  const {
    colors: {
      neutral: {WHITE, GREY_BLUE},
      primary: {MEDIUM_BLUE},
    },
  } = useTheme();

  const [cardList, setCardList] = React.useState<GithubPost[]>(dummyData);
  const [currentTag, setCurrentTag] = React.useState<string>('ALL');
  const navigate = useNavigate();
  React.useEffect(() => {
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
    <MainStyle.Container>
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
      <MainStyle.TagList>
        {Tags.map(({label, value}, index) => {
          const isCurrent = currentTag === value;
          return (
            <Tag
              key={`tag-${index}`}
              onClick={() => setCurrentTag(value)}
              color={isCurrent ? WHITE : null}
              backgroundColor={isCurrent ? MEDIUM_BLUE : WHITE}>
              {label}
            </Tag>
          );
        })}
      </MainStyle.TagList>
      <div className="cardList">
        {cardList.map((cardData, index) => {
          return (
            <CardItem
              redirect={() => navigate(`/post/detail/${cardData.id}`)}
              key={`card-${index}`}
              cardData={cardData}
            />
          );
        })}
      </div>
    </MainStyle.Container>
  );
};
export default MainPage;

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

const MainStyle = {
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
  `,
};
