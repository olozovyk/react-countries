import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    backgroundColor: string;
    textColor: string;
    inputColor: string;
    elementsColor: string;

    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
  }
}
