import React from 'react';
import styled from 'styled-components';
import Header from './Header';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <S.Container>
      <Header></Header>
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

export {Layout};

const S = {
  Container: styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    align-items: center;
  `,
  Main: styled.main`
    display: flex;
    width: 60%;
    flex-direction: column;
    min-height: calc(100vh - 88px);
    height: 100%;
  `,
};
