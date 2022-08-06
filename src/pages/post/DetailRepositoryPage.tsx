import React, {useEffect} from 'react';
import {useReadme, useRepository} from 'src/hooks';
import {Utterances} from 'utterances-react-component';
import {useParams} from 'react-router-dom';
import {
  GithubIcon,
  ShareIcon,
  UserProfileIcon,
  LikedIcon,
  CommentIcon,
  StarIcon,
  PublishIcon,
  UpArrowIcon,
  Typography,
} from 'src/components/atoms';
import styled from 'styled-components';
import {Marked} from '@ts-stack/markdown';

import {OtherRepo, SideButton} from 'src/components/molecules';

import 'src/styles/Detail.css';
import {GithubPost} from 'src/types';

const DetailRepositoryPage: React.FC = () => {
  const {repositoryId} = useParams();
  const {
    id,
    url,
    readme_url,
    full_name,
    author,
    created_at,
    description,
    used_language,
    post_like,
    stars,
    title,
  } = useRepository({id: repositoryId});
  const {readme, error} = useReadme({id: repositoryId});

  useEffect(() => {
    const container = document.getElementById('readme');
    container?.insertAdjacentHTML('afterend', Marked.parse(readme.toString()));
  }, [readme]);

  const SideButtonList = [
    {
      onClick: () => (location.href = `https://github.com/${author}`),
      renderIcon: () => <PublishIcon />,
    },
    {
      onClick: () => (location.href = `https://github.com/${author}/${title}`),
      renderIcon: () => <GithubIcon />,
    },
    {
      onClick: () => window.scrollTo(0, 0),
      renderIcon: () => <UpArrowIcon />,
    },
  ];

  const DetailRepositoryPageViewProps = {
    id,
    url,
    readme_url,
    full_name,
    created_at,
    title,
    description,
    author,
    post_like,
    stars,
    used_language,
    error,
    SideButtonList,
  };

  return <DetailRepositoryPageView {...DetailRepositoryPageViewProps} />;
};

interface DetailRepositoryPageViewProps extends GithubPost {
  error: boolean;
  SideButtonList: any[];
}

const DetailRepositoryPageView: React.FC<DetailRepositoryPageViewProps> = ({
  created_at,
  title,
  description,
  author,
  post_like,
  stars,
  used_language,
  error,
  SideButtonList,
}) => (
  <Container>
    <InnerContainer>
      <RepoInfo>
        <div className="postInfo">
          <Typography size="16" lineHeight="34">
            {created_at}
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
            {title}
          </Typography>
        </Title>
        <Typography size="20" weight="400">
          {description}
        </Typography>
        <PostInfo>
          <div className="postInfoLeft">
            <IconWrapper>
              <UserProfileIcon />
              <Typography>{author}</Typography>
            </IconWrapper>
            <IconWrapper>
              <LikedIcon />
              <Typography>{post_like}</Typography>
            </IconWrapper>
            <IconWrapper>
              <CommentIcon />
            </IconWrapper>
          </div>
          <div>
            <IconWrapper
              style={{
                background: '#F5F7FA',
                borderRadius: '16px',
                width: '266px',
                height: '48px',
                padding: '8px 12px',
              }}>
              <StarIcon />
              <Typography color="#4D4D4D">
                Github에서 {stars} star를 받았어요
              </Typography>
            </IconWrapper>
          </div>
        </PostInfo>
      </RepoInfo>

      <Languages>
        {used_language.split('::').map((lang: string, index: number) => (
          <LangWrapper>
            <Typography>{lang}</Typography>
          </LangWrapper>
        ))}
      </Languages>

      <hr />
      <ReadmeStyle.Container className="readme-body">
        {error ? (
          <Typography>레포지토리를 불러오지 못했습니다.</Typography>
        ) : (
          <ReadmeStyle.Readme id="readme" />
        )}
      </ReadmeStyle.Container>

      <hr />

      <Utterances
        repo={`${author}/comment`}
        theme="github-light"
        issueTerm="pathname"
      />

      <OtherRepoList>
        <Typography size="28" marginBottom={48}>
          다른 레포지토리 보러 가기
        </Typography>
        {otherRepoMock?.map((data, index) => (
          <OtherRepo data={data} key={`other-repo_${index}`} />
        ))}
      </OtherRepoList>
    </InnerContainer>

    <SideButton buttonList={SideButtonList} />
  </Container>
);

export default DetailRepositoryPage;

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

const OtherRepoList = styled.div`
  margin-top: 160px;
  margin-bottom: 130px;
`;

const ReadmeStyle = {
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
