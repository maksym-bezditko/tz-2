import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      slightPurple: string;
      primaryPurple: string;
      darkPurple: string;
      black: string;
    };
  }
}
