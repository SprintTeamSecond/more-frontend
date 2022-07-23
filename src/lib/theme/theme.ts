import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';

export type Themetype = {
  colors: {
    primary: string;
    accent: string;
    warning: string;
    background: string;
  };
  dimensions: {};
};

const theme: Themetype = {
  colors: {
    primary: '#0671E0',
    accent: '#000000',
    warning: 'red',
    background: '#F5F7FA',
  },
  dimensions: {},
};

import 'styled-components';
// import theme from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Themetype {}
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    background-color: #ffffff;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"SUIT-Regular","SUIT-Medium","SUIT-SemiBold","SUIT-Bold","SUIT-Heavy"
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  @font-face {
    font-family: 'SUIT-Heavy';
    src: local('SUIT-Heavy'), url(fonts/SUIT-Heavy.ttf) format('ttf');
  }
  @font-face {
    font-family: 'SUIT-Bold';
    src: local('SUIT-Bold'), url(fonts/SUIT-Bold.ttf) format('ttf');
  }
  @font-face {
    font-family: 'SUIT-SemiBold';
    src: local('SUIT-SemiBold'), url(fonts/SUIT-SemiBold.ttf) format('ttf');
  }
  @font-face {
    font-family: 'SUIT-Medium';
    src: local('SUIT-Medium'), url(fonts/SUIT-Medium.ttf) format('ttf');
  }
  @font-face {
    font-family: 'SUIT-Regular';
    src: local('SUIT-Regular'), url(fonts/SUIT-Regular.ttf) format('ttf');
  }
`;

export default theme;
