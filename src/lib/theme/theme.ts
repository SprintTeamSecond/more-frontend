import "styled-components";
// import theme from './theme'

export type Themetype = {
  colors: {
    primary: string;
    accent: string;
    warning: string;
  };
  dimensions: {};
};

const theme: Themetype = {
  colors: {
    primary: "#027afa",
    accent: "#000000",
    warning: "red",
  },
  dimensions: {},
};

declare module "styled-components" {
  export interface DefaultTheme extends Themetype {}
}

export default theme;
