import React from 'react';
import styled from 'styled-components';
import {LikeIcon, NodeJsIcon} from './Icon';
import Typography from './typography';

const RepoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 187px;
  margin: 12px 0;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 2px 11px rgba(9, 33, 57, 0.1);
  border-radius: 12px;
`;
const Thumbnail = styled.img`
  width: 40%;
  max-width: 232px;
  height: 100%;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  background-color: #717171;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow: hidden;
  position: relative;

  .repoListTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .repoListSubTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-right: 0.5rem;
  border-radius: 50%;
  /* White */
  background: #ffffff;
  /* Sky */
  border: 1px solid #dbedff;
`;

const OtherRepo = (data: any) => {
  const title = data.data.title;
  const subTitle = data.data.subTitle;
  return (
    <RepoContainer>
      <Thumbnail />
      <Content>
        <Typography
          className="repoListTitle"
          size="22"
          weight="700"
          lineHeight="32"
          marginBottom={12}>
          {title}
        </Typography>
        <Typography
          className="repoListSubTitle"
          size="16"
          weight="400"
          lineHeight="24"
          color="#4D4D4D"
          marginBottom={24}>
          {subTitle}
        </Typography>
        <Icons>
          <IconWrapper>
            <Icon>
              <NodeJsIcon />
            </Icon>
            <Icon>
              <NodeJsIcon />
            </Icon>
            <Icon>
              <NodeJsIcon />
            </Icon>
            <Icon>
              <NodeJsIcon />
            </Icon>
            <Icon>
              <NodeJsIcon />
            </Icon>
          </IconWrapper>
          <LikeIcon />
        </Icons>
      </Content>
    </RepoContainer>
  );
};

export default OtherRepo;
