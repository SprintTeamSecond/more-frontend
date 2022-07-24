import React, {SetStateAction, useEffect, useState} from 'react';
import useReadme from '../hooks/useReadme';
import styled from 'styled-components';
import {Marked, Renderer} from '@ts-stack/markdown';
import './Detail.css';

const Detail = () => {
  const readme = useReadme();
  const readmeHtml = Marked.parse(readme.toString());

  useEffect(() => {
    const container = document.getElementById('readme');
    container?.insertAdjacentHTML('afterend', readmeHtml);
  });

  return (
    <S.Container className="readme-body">
      <S.Readme id="readme"></S.Readme>
    </S.Container>
  );
};

export default Detail;

const Container = styled.div``;

const S = {
  Container: styled.div``,
  Readme: styled.div``,
};
