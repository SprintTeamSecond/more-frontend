import styled, { DefaultTheme } from "styled-components";

type TypographyProps = {
  size?: "12" | "13" | "14";
  weight?: "500" | "700";
  color?: string;
  marginBottom?: number;
  marginTop?: number;
  theme: DefaultTheme;
};

const Typography = styled.p<TypographyProps>`
  font-size: ${(props) => props.size || "12"};
  font-weight: ${(props) => props.weight || "500"};
  margin-bottom: ${(props) => props.marginBottom || "0"}px;
  margin-top: ${(props) => props.marginTop || "0"}px;
`;

export default Typography;
