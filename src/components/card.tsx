import React, {useState} from 'react';
import styled from 'styled-components';
import {PostEntity} from '../types';
import Typography from './atoms/typography';

interface CardProps {
  data: PostEntity;
}

const Card = ({data}: CardProps) => {
  return (
    <S.Container>
      <div className="imageContainer"></div>
      <div className="contentsContainer">
        <div className="titleBox">{data.title}</div>
        <div className="descBox">{data.description}</div>
        <div className="languageTagBox">
          {data.used_language.map((item) => {
            return <span>{item}</span>;
          })}
        </div>

        <div></div>
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

    .imageContainer {
      width: 100%;
      height: 192px;
      background-color: #717171;
    }
    .contentsContainer {
      padding: 24px;
    }
    .titleBox {
      width: 330px;
      height: 62px;

      font-weight: 700;
      font-size: 22px;
      color: #212121;
      line-height: 140%;
      margin-bottom: 12px;
    }
    .descBox {
      width: 330px;
      height: 44px;

      font-weight: 400;
      font-size: 16px;
      color: #4d4d4d;
      line-height: 140%;
      margin-bottom: 24px;
    }
    .languageTagBox {
    }
  `,
};
