/// <reference types="vite/client" />

import "styled-components";
import type { AppTheme } from "./theme";

declare module "styled-components" {
  // Augment DefaultTheme with our AppTheme structure
  export interface DefaultTheme {
    colors: AppTheme["colors"];
  }
}
