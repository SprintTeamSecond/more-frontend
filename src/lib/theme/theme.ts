import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';

export type ThemeType = {
  colors: {
    neutral: {
      BLACK: string;
      DARK_GREY: string;
      GREY: string;
      LIGHT_GREY: string;
      GREY_BLUE: string;
      LIGHT_GREY_BLUE: string;
      SILVER: string;
      WHITE: string;
    };
    primary: {
      DARK_BLUE: string;
      NAVY: string;
      MEDIUM_BLUE: string;
      AZURE: string;
      SKY: string;
      LIGHT_BLUE: string;
    };
    danger: {
      DARK_RED: string;
      SCARLET: string;
      MEDIUM_RED: string;
      RASPBERRY: string;
      RUBICUND: string;
      LIGHT_RED: string;
    };
    accent: string;
    warning: string;
    background: string;
  };
  dimensions: {};
};

const theme: ThemeType = {
  colors: {
    neutral: {
      BLACK: '#212121',
      DARK_GREY: '#4D4D4D',
      GREY: '#717171',
      LIGHT_GREY: '#89939E',
      GREY_BLUE: '#ABBED1',
      LIGHT_GREY_BLUE: '#D8DFE7',
      SILVER: '#F5F7FA',
      WHITE: '#FFFFFF',
    },
    primary: {
      DARK_BLUE: '#0053AD',
      NAVY: '#0663c7',
      MEDIUM_BLUE: '#0671E0',
      AZURE: '#4196F0',
      SKY: '#DBEDFF',
      LIGHT_BLUE: '#EEF5FC',
    },
    danger: {
      DARK_RED: '#C33025',
      SCARLET: '#E01507',
      MEDIUM_RED: '#CE02B1D',
      RASPBERRY: '#FF5A4F',
      RUBICUND: '#F0857D',
      LIGHT_RED: '#FFF1F0',
    },
    accent: '#000000',
    warning: 'red',
    background: '#F5F7FA',
  },
  dimensions: {},
};

import 'styled-components';
// import theme from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
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
    /* width: 100%;
    height: 100%; */
  }
  input {
    width: 100%;
  }
  button {
    cursor: pointer;
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
