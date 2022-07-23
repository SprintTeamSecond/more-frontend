import React, {useEffect, useState} from 'react';
import styled, {DefaultTheme, useTheme} from 'styled-components';
import Typography from '../components/atoms/typography';
import Card from '../components/card';
import {PostEntity} from '../types';

const Main = () => {
  const theme = useTheme();
  const [cardList, setCardList] = useState<PostEntity[]>([]);

  useEffect(() => {}, []);

  return (
    <S.Container>
      {cardList.map((data) => {
        return <Card data={data}></Card>;
      })}
    </S.Container>
  );
};
export default Main;

const S = {
  Container: styled.div``,
};
