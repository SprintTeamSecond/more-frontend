import React, {useState} from 'react';
import styled from 'styled-components';
import {GithubPost, PostEntity} from '../types';
import {CommentIcon, LikeIcon, NodeJsIcon, UserIcon} from './atoms/Icon';
import Typography from './atoms/typography';

interface CardProps {
  data: GithubPost;
}

const Card = ({data}: CardProps) => {
  return (
    <S.Container>
      <img className="thumbnail" src={data.thumbnail} />
      <div className="contentsContainer">
        <div className="titleBox">
          <Typography size="22" weight="700" color="#212121">
            {data.title}
          </Typography>
        </div>
        <div className="descBox">
          <Typography size="16" weight="400" color="#4d4d4d">
            {data.description}
          </Typography>
        </div>
        <section className="languageTagSection">
          {data.used_language.map((item) => {
            return <NodeJsIcon />;
          })}
        </section>
        <section className="bottomSection">
          <div className="userInfo">
            <UserIcon />
            <Typography size="16" weight="400" color="#4D4D4D">
              {data.author.user}
            </Typography>
          </div>
          <div className="likeComment">
            <div className="likeBox">
              <LikeIcon />
              <Typography size="16" weight="400" color="#4D4D4D">
                {data.like}
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

export default Card;

const S = {
  Container: styled.div`
    width: 378px;
    height: 490px;
    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(9, 33, 57, 0.1);
    border-radius: 12px;

    font-family: 'SUIT';
    font-style: normal;

    overflow: hidden;

    .thumbnail {
      width: 100%;
      height: 192px;
      object-fit: cover;
      background-color: #717171;
    }
    .contentsContainer {
      padding: 24px;
    }
    .titleBox {
      width: 330px;
      height: 62px;
      line-height: 140%;
      margin-bottom: 12px;
    }
    .descBox {
      width: 330px;
      height: 44px;
      line-height: 140%;
      margin-bottom: 24px;
    }
    .languageTagSection {
      display: flex;
      gap: 13px;
      margin-bottom: 44px;
    }
    .bottomSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
