import styled, {DefaultTheme} from 'styled-components';

type TypographyProps = {
  size?:
    | '12'
    | '13'
    | '14'
    | '16'
    | '18'
    | '20'
    | '22'
    | '24'
    | '27'
    | '28'
    | '32'
    | '42';
  weight?: '400' | '500' | '600' | '700' | '900';
  color?: string;
  marginBottom?: number;
  marginTop?: number;
  lineHeight?: '24' | '32' | '34';
  theme: DefaultTheme;
};

const Typography = styled.p<TypographyProps>`
  font-size: ${(props) => props.size + 'px' || '12'};
  font-weight: ${(props) => props.weight || '500'};
  color: ${(props) => props.color || 'black'};
  margin-bottom: ${(props) => props.marginBottom || '0'}px;
  margin-top: ${(props) => props.marginTop || '0'}px;
  line-height: ${({lineHeight}) => (lineHeight ? lineHeight + 'px' : null)};
`;

export default Typography;
