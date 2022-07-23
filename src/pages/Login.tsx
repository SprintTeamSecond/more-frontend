import React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";
import Typography from "../components/atoms/typography";

const Login = () => {
  const theme = useTheme();
  return (
    <S.Container>
      <Typography size="13" marginBottom={10}>
        안녕하세요
      </Typography>
      {/* <TypographyParent size="12"></TypographyParent> */}
    </S.Container>
  );
};

export default Login;

const Container = styled.div``;

// const TypographyParent = styled(Typography)`
//   background-color: red;
// `;

const S = {
  Container: styled.div``,
};
