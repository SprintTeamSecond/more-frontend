import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import styled, {useTheme} from 'styled-components';
import {Marked} from '@ts-stack/markdown';

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
import {OtherRepo, SideButton, Comments} from 'src/components/molecules';
import 'src/styles/Detail.css';

import {useReadme, useRepository} from 'src/hooks';
import {dummyData} from 'src/constant';

const DetailRepositoryPage: React.FC = () => {
  const {repositoryId} = useParams();
  const {
    id,
    author,
    created_at,
    description,
    used_language,
    post_like,
    stars,
    title,
  } = useRepository();
  const {readme, error} = useReadme();
  const navigate = useNavigate();
  const {
    colors: {
      neutral: {DARK_GREY, SILVER},
    },
  } = useTheme();

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

  const otherRepo = dummyData.filter(({id}) => id !== repositoryId);

  return (
    <React.Fragment>
      <DetailStyle.Container>
        <DetailStyle.RepoInfo>
          <div className="postInfo">
            <Typography size="16" lineHeight="34">
              {created_at}
            </Typography>
            <DetailStyle.IconWrapper>
              <div>
                <ShareIcon />
              </div>
              <div>공유하기</div>
            </DetailStyle.IconWrapper>
          </div>
          <DetailStyle.Title>
            <Typography size="42" weight="700">
              {title}
            </Typography>
          </DetailStyle.Title>
          <Typography size="20" weight="400">
            {description}
          </Typography>
          <DetailStyle.PostInfo>
            <div className="postInfoLeft">
              <DetailStyle.IconWrapper>
                <UserProfileIcon />
                <Typography>{author}</Typography>
              </DetailStyle.IconWrapper>
              <DetailStyle.IconWrapper>
                <LikedIcon />
                <Typography>{post_like}</Typography>
              </DetailStyle.IconWrapper>
              <DetailStyle.IconWrapper>
                <CommentIcon />
              </DetailStyle.IconWrapper>
            </div>
            <div>
              <DetailStyle.IconWrapper
                style={{
                  background: SILVER,
                  borderRadius: '16px',
                  width: '266px',
                  height: '48px',
                  padding: '8px 12px',
                }}>
                <StarIcon />
                <Typography color={DARK_GREY}>
                  Github에서 {stars} star를 받았어요
                </Typography>
              </DetailStyle.IconWrapper>
            </div>
          </DetailStyle.PostInfo>
        </DetailStyle.RepoInfo>

        <DetailStyle.Languages>
          {used_language.split('::').map((lang: string, index: number) => (
            <DetailStyle.LangWrapper key={`usedLanguage-${index}`}>
              <Typography>{lang}</Typography>
            </DetailStyle.LangWrapper>
          ))}
        </DetailStyle.Languages>

        <ReadmeStyle.Container className="readme-body">
          {error ? (
            <Typography>레포지토리를 불러오지 못했습니다.</Typography>
          ) : (
            <ReadmeStyle.Readme id="readme">
              <div dangerouslySetInnerHTML={{__html: Marked.parse(`${readme}`)}} />
            </ReadmeStyle.Readme>
          )}
        </ReadmeStyle.Container>

        <Comments />

        <SideButton buttonList={SideButtonList} />
      </DetailStyle.Container>
      <OtherRepoStyle.Container>
        <Typography size="28" marginBottom={48}>
          다른 레포지토리 보러 가기
        </Typography>
        {otherRepo?.map(
          ({id, title, description, used_language, thumbnail}, index) => (
            <OtherRepo
              redirect={() => {
                navigate(`/post/detail/${id}`);
                window.scrollTo(0, 0);
              }}
              {...{title, description, used_language: used_language, thumbnail}}
              key={`other-repo_${index}`}
            />
          ),
        )}
      </OtherRepoStyle.Container>
    </React.Fragment>
  );
};

export default DetailRepositoryPage;

const DetailStyle = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 104px;
  `,
  RepoInfo: styled.div`
    position: relative;
    .postInfo {
      display: flex;
      justify-content: space-between;
      height: 30px;
    }
  `,
  Title: styled.div`
    height: 118px;
    margin-top: 10px;
  `,
  IconWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
  `,
  PostInfo: styled.div`
    margin-top: 102px;
    display: flex;
    justify-content: space-between;
    .postInfoLeft {
      display: flex;
      gap: 24.5px;
    }
  `,
  Languages: styled.div`
    display: flex;
    gap: 16px;
    margin-top: 40px;
    margin-bottom: 24px;
  `,
  LangWrapper: styled.div`
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
  `,
};

const OtherRepoStyle = {
  Container: styled.div`
    margin: 160px 0 130px 0;
  `,
};

const ReadmeStyle = {
  Container: styled.div`
    border-top: 1px solid #abbed1;
    border-bottom: 1px solid #abbed1;
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
