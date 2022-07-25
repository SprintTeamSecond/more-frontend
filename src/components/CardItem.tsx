import React, {useState} from 'react';
import styled from 'styled-components';
import {GithubPost, PostEntity} from '../types';
import {
  CommentIcon,
  LikeIcon,
  UserIcon,
  NodeJsIcon,
  JsIcon,
  NextJsIcon,
} from './atoms/Icon';
import Typography from './atoms/typography';

interface CardProps {
  data: GithubPost;
}

import {useNavigate} from 'react-router-dom';

const CardItem = ({data}: CardProps) => {
  const renderTextMaxLength = (text: string, maxLength: number) => {
    const {length} = text;
    return length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  const navigate = useNavigate();

  const tagToIcon = (tag: string) => {
    const tagList: string[] = tag.split('::');
    const result = tagList.map((item) => {
      switch (true) {
        case item.toLowerCase().includes('javascript'):
          return <JsIcon key={item} />;
        case item.toLowerCase().includes('nodejs'):
          return <NodeJsIcon key={item} />;
        case item.toLowerCase().includes('nextjs'):
          return <NextJsIcon key={item} />;
      }
    });
    return result;
  };

  return (
    <S.Container onClick={() => navigate('/detail')}>
      <img className="thumbnail" src={data?.thumbnail} />
      <div className="contentsContainer">
        <div className="titleBox">
          <Typography size="22" weight="700" color="#212121">
            {renderTextMaxLength(data.title, 26)}
          </Typography>
        </div>
        <div className="descBox">
          <Typography size="16" weight="400" color="#4d4d4d">
            {renderTextMaxLength(data.description, 40)}
          </Typography>
        </div>
        <section className="languageTagSection">
          {data.hashtag && tagToIcon(data.hashtag)}
        </section>
        <section className="bottomSection">
          <div className="userInfo">
            <UserIcon />
            <Typography size="16" weight="400" color="#4D4D4D">
              {data?.author}
            </Typography>
          </div>
          <div className="likeComment">
            <div className="likeBox">
              <LikeIcon />
              <Typography size="16" weight="400" color="#4D4D4D">
                {data?.post_like || '-'}
              </Typography>
            </div>
            <div className="commentBox">
              <CommentIcon />
              <Typography size="16" weight="400" color="#4D4D4D">
                12
              </Typography>
            </div>
          </div>
        </section>
      </div>
    </S.Container>
  );
};

export default CardItem;

const S = {
  Container: styled.div`
    width: 100%;
    height: 490px;
    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(9, 33, 57, 0.1);
    border-radius: 12px;

    font-family: 'SUIT';
    font-style: normal;

    overflow: hidden;
    cursor: pointer;

    &:hover {
      animation: postHover 0.2s;
      animation-fill-mode: forwards;
    }

    @keyframes postHover {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }

    .thumbnail {
      width: 100%;
      height: 192px;
      object-fit: cover;
      background-color: #717171;
    }
    .contentsContainer {
      position: relative;
      height: 298px;
      padding: 24px;
    }
    .titleBox {
      width: 100%;
      line-height: 140%;
      margin-bottom: 12px;
    }
    .descBox {
      width: 100%;
      height: 44px;
      line-height: 140%;
      margin-bottom: 24px;
    }
    .languageTagSection {
      display: flex;
      gap: 13px;
      padding: 0 10px;
      margin-bottom: 44px;
    }
    .bottomSection {
      position: absolute;
      left: 24px;
      right: 24px;
      bottom: 24px;
      display: flex;
      justify-content: space-between;
    }
    .userInfo {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .likeComment {
      display: flex;
      gap: 13.5px;
    }
    .likeBox,
    .commentBox {
      display: flex;
      align-items: center;
      gap: 9.5px;
    }
  `,
};
