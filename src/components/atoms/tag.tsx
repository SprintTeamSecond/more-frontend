import styled from 'styled-components';

type TagProps = {
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;

  backgroundColor?: string;

  borderColor?: string;
  borderRadius?: string;

  color?: any;
};

export const Tag = styled.div<TagProps>`
  padding: ${({padding}) => (padding ? padding : '10px 16px')};
  padding-top: ${({paddingTop}) => (paddingTop ? paddingTop + 'px' : null)};
  padding-right: ${({paddingRight}) => (paddingRight ? paddingRight + 'px' : null)};
  padding-bottom: ${({paddingBottom}) =>
    paddingBottom ? paddingBottom + 'px' : null};
  padding-left: ${({paddingLeft}) => (paddingLeft ? paddingLeft + 'px' : null)};

  background-color: ${({backgroundColor}) =>
    backgroundColor ? backgroundColor : '#FFFFFF'};

  border: ${({borderColor}) =>
    borderColor ? '1.5px solid ' + borderColor : '1.5px solid #ABBED1'};
  border-radius: ${({borderRadius}) =>
    borderRadius ? borderRadius + 'px' : '24px'};
  color: ${({color}) => (color ? color : '#717171')};
  cursor: pointer;
`;
