import styled, {DefaultTheme} from 'styled-components';

type ButtonProps = {
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;

  backgroundColor?: string;

  borderColor?: string;
  borderRadius?: string;
};

export const Button = styled.button<ButtonProps>`
  padding: ${({padding}) => (padding ? padding : null)};
  padding-top: ${({paddingTop}) => (paddingTop ? paddingTop + 'px' : null)};
  padding-right: ${({paddingRight}) => (paddingRight ? paddingRight + 'px' : null)};
  padding-bottom: ${({paddingBottom}) =>
    paddingBottom ? paddingBottom + 'px' : null};
  padding-left: ${({paddingLeft}) => (paddingLeft ? paddingLeft + 'px' : null)};

  background-color: ${({backgroundColor}) =>
    backgroundColor ? backgroundColor : null};

  border: ${({borderColor}) => (borderColor ? '1px solid ' + borderColor : null)};
  border-radius: ${({borderRadius}) => (borderRadius ? borderRadius + 'px' : null)};
`;
