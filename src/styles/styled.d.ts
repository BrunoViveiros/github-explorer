import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    backgroundImage: string;
    logoImage: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      primaryText: string;
      secondaryText: string;

      error: string;

      moonColor: string;
      sunColor: string;
    };
  }
}
