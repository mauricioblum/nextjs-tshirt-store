/// <reference types="next" />
/// <reference types="next/types/global" />

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundSecondary: string;
      text: string;
      error: string;
      disabled: string;
    };
  }
}
