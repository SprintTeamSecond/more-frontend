import React from 'react';
import styled from 'styled-components';
import {LikeIcon, NodeJsIcon, Typography} from 'src/components/atoms';
import {useTheme} from 'styled-components';

interface OtherRepoProps {
  redirect: () => void;
  title: string;
  description: string;
  used_language: string;
  thumbnail?: string;
}

export const OtherRepo: React.FC<OtherRepoProps> = ({
  redirect,
  title,
  description,
  used_language,
  thumbnail,
}) => {
  const [isClicked, setIsLiked] = React.useState<boolean>(false);
  const {
    colors: {
      neutral: {DARK_GREY},
    },
  } = useTheme();
  return (
    <RepoStyle.Container>
      <RepoStyle.Thumbnail src={thumbnail} onClick={redirect} />
      <RepoStyle.Content>
        <Typography
          className="repoListTitle"
          size="22"
          weight="700"
          lineHeight="32"
          marginBottom={12}>
          {title}
        </Typography>
        <Typography
          className="repoListDescription"
          size="16"
          weight="400"
          lineHeight="24"
          color={DARK_GREY}
          marginBottom={24}>
          {description}
        </Typography>
        <RepoStyle.IconList>
          <div style={{display: 'flex'}}>
            {used_language.split('::')?.map((text: any, index: number) => (
              <RepoStyle.Icon key={`used_language-${index}`}>
                <NodeJsIcon />
              </RepoStyle.Icon>
            ))}
          </div>
          <div>{isClicked ? <LikeIcon /> : <LikeIcon />}</div>
        </RepoStyle.IconList>
      </RepoStyle.Content>
    </RepoStyle.Container>
  );
};
const RepoStyle = {
  Container: styled.div`
    display: flex;
    width: 100%;
    height: 187px;
    margin: 12px 0;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0px 2px 11px rgba(9, 33, 57, 0.1);
    border-radius: 12px;
  `,
  Thumbnail: styled.img`
    width: 40%;
    max-width: 232px;
    height: 100%;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    background-color: #717171;
    cursor: pointer;
  `,

  Content: styled.div`
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
    .repoListDescription {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  `,
  IconList: styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Icon: styled.li`
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
  `,
};
