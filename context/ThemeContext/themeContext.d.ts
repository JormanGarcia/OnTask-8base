import { Dispatch, SetStateAction } from "react";

export interface themeContext {
  theme: boolean;
  toggleTheme: () => void;
}
