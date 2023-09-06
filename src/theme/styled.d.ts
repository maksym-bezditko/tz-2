import 'styled-components';
import { StyledBreakpointsTheme } from 'styled-breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme extends StyledBreakpointsTheme {
    colors: {
      white: string;
      slightPurple: string;
      primaryPurple: string;
      darkPurple: string;
      black: string;
      lightOrange: string;
      orange: string;
      lightBlue: string;
      greyishBlue: string;
      grey: string;
      silentPurple: string;
      purple: string;
      whitishBlue: string;
      purpleBlue: string;
      lightGreen: string;
      primaryGreen: string;
      limeGreen: string;
      badgePurple: string;
    };
    breakpoints: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
  }
}
