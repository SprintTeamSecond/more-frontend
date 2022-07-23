import React, {useEffect, useState} from 'react';
import styled, {DefaultTheme, useTheme} from 'styled-components';
import Typography from '../components/atoms/typography';
import {PostEntity} from '../types';

const Main = () => {
  const theme = useTheme();
  const [cardList, setCardList] = useState<PostEntity[]>([]);

  useEffect(() => {}, []);

  return (
    <S.Container>
      {cardList.map((item) => {
        return <div key={item._id}>{item.title}</div>;
      })}
    </S.Container>
  );
};
export default Main;

const S = {
  Container: styled.div``,
};
