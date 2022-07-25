import React, {SetStateAction, useEffect, useState} from 'react';
import useReadme from '../hooks/useReadme';
import {Utterances} from 'utterances-react-component';
import {
  GithubIcon,
  ShareIcon,
  UserProfileIcon,
  LikedIcon,
  CommentIcon,
  StarIcon,
  PublishIcon,
  UpArrowIcon,
  JsIcon,
  NodeJsIcon,
} from '../components/atoms';
import styled from 'styled-components';
import {Marked, Renderer} from '@ts-stack/markdown';
import './Detail.css';
import Typography from '../components/atoms/typography';
import OtherRepo from '../components/atoms/otherRepo';

const data = {
  _id: 'SprintTeamSecond',
  title: '개발자 레포지토리 공유 플랫폼',
  like: 1,
  description:
    '개발자들이 자신의 레포지토리를 사람들과 공유할 수 있는 플랫폼 입니다.',
  used_language: ['kotlin', 'react'],
  thumbnail: null,
  created_at: '2022.07.13',
};

const otherRepoMock = [
  {
    title: '글 제목은 한줄만 나와요 넘어가면 점이 생겨요 이렇게 긴 글제목은 말이죠',
    subTitle:
      '한 줄 소개 입니다. 한 줄 소개 입니다. 한 줄 소개는 2줄을 넘어가지 않습니다. 2줄을 넘어가면 점이 생겨요 언제 두 줄이 넘어가는 거죠? 언제 두 줄이 넘어가는 거죠? 언제 두 줄이 넘어가는 거죠?',
  },
  {
    title: '글 제목은 한줄만 나와요 넘어가면 점이 생겨요 이렇게 긴 글제목은 말이죠',
    subTitle:
      '한 줄 소개 입니다. 한 줄 소개 입니다. 한 줄 소개는 2줄을 넘어가지 않습니다. 2줄을 넘어가면 점이 생겨요',
  },
];

const Detail = () => {
  const readme = useReadme();
  const readmeHtml = Marked.parse(readme.toString());
  const [owner, setOwner] = useState<string>();
  const [repo, setRepo] = useState<string>();

  console.log(readmeHtml);
  const getInfoFromUrl = () => {
    const currentUrl = window.location.href;
    console.log(currentUrl.split('/').splice(4, 2));

    setOwner(currentUrl.split('/').splice(4, 2)[0]);
    setRepo(currentUrl.split('/').splice(4, 2)[1]);
  };

  useEffect(() => {
    const container = document.getElementById('readme');
    container?.insertAdjacentHTML('afterend', readmeHtml);

    getInfoFromUrl();
  }, [readme]);

  return (
    <Container>
      <InnerContainer>
        <RepoInfo>
          <div className="postInfo">
            <Typography size="16" lineHeight="34">
              {data.created_at}
            </Typography>
            <IconWrapper>
              <div>
                <ShareIcon />
              </div>
              <div>공유하기</div>
            </IconWrapper>
          </div>
          <Title>
            <Typography size="42" weight="700">
              {data.title}
            </Typography>
          </Title>
          <Typography size="20" weight="400">
            {data.description}
          </Typography>
          <PostInfo>
            <div className="postInfoLeft">
              <IconWrapper>
                <UserProfileIcon />
                <Typography>{data._id}</Typography>
              </IconWrapper>
              <IconWrapper>
                <LikedIcon />
                <Typography>{data.like}</Typography>
              </IconWrapper>
              <IconWrapper>
                <CommentIcon />
              </IconWrapper>
            </div>
            <div>
              <IconWrapper
                style={{
                  background: '#F5F7FA;',
                  borderRadius: '16px',
                  width: '266px',
                  height: '48px',
                  padding: '8px 12px',
                }}>
                <StarIcon />
                <Typography color="#4D4D4D">
                  Github에서 {data.like} star를 받았어요
                </Typography>
              </IconWrapper>
            </div>
          </PostInfo>
        </RepoInfo>

        <Languages>
          <LangWrapper>
            <JsIcon width="18" height="18" />
            <Typography>JavsScript</Typography>
          </LangWrapper>
          <LangWrapper>
            <NodeJsIcon width="18" height="18" />
            <Typography>NodeJs</Typography>
          </LangWrapper>
        </Languages>

        <hr />
        <S.Container className="readme-body">
          <S.Readme id="readme"></S.Readme>
        </S.Container>
        <SideBtns>
          <SideBtn onClick={() => (location.href = `https://github.com/${owner}`)}>
            <PublishIcon />
          </SideBtn>
          <SideBtn
            onClick={() => (location.href = `https://github.com/${owner}/${repo}`)}>
            <GithubIcon />
          </SideBtn>
          <SideBtn onClick={() => window.scrollTo(0, 0)}>
            <UpArrowIcon />
          </SideBtn>
        </SideBtns>
        <hr />
        <Utterances
          repo="SprintTeamSecond/comment"
          theme="github-light"
          issueTerm="pathname"
        />

        <OtherRepoList>
          <Typography size="28" marginBottom={48}>
            다른 레포지토리 보러 가기
          </Typography>
          <OtherRepo data={otherRepoMock[0]} />
          <OtherRepo data={otherRepoMock[1]} />
        </OtherRepoList>
      </InnerContainer>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  margin-top: 111px;
`;
const InnerContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const RepoInfo = styled.div`
  position: relative;
  .postInfo {
    display: flex;
    justify-content: space-between;
    height: 30px;
  }
`;

const Title = styled.div`
  height: 118px;
  margin-top: 10px;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`;
const PostInfo = styled.div`
  margin-top: 102px;
  display: flex;
  justify-content: space-between;
  .postInfoLeft {
    display: flex;
    gap: 24.5px;
  }
`;

const Languages = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  margin-bottom: 24px;
`;
const LangWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 4px;
  height: 40px;
  /* White */
  background: #ffffff;
  /* D+blue */
  border: 1px solid #0053ad;
  border-radius: 24px;
`;

const SideBtns = styled.div`
  position: fixed;
  bottom: 42px;
  right: 12%;
`;
const SideBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 2px 11px rgba(9, 33, 57, 0.1);
  cursor: pointer;
`;

const OtherRepoList = styled.div`
  margin-top: 160px;
  margin-bottom: 130px;
`;

const S = {
  Container: styled.div`
    position: relative;
  `,
  Title: styled.h1`
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  `,
  Badge: styled.div`
    border: none;
    cursor: default;
    height: 32px;
    display: inline-flex;
    outline: 0;
    padding: 0 12px;
    font-size: 0.8125rem;
    box-sizing: border-box;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    font-family: Roboto, sans-serif;
    white-space: nowrap;
    border-radius: 16px;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    margin-right: 8px;
    margin-bottom: 8px;
    color: #fff;
    background-color: #000000;
    span {
      overflow: hidden;
      white-space: nowrap;
      padding-left: 12px;
      padding-right: 12px;
      text-overflow: ellipsis;
    }
  `,
  Readme: styled.div``,
};
