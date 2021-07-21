import { FC } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { useThemeContext } from "../context/ThemeContext";
import DefaultTheme from "./themes/defaultTheme";
import DarkTheme from "./themes/darkTheme";

export const ThemeProvider: FC = ({ children }) => {
  const { theme } = useThemeContext();

  const selectedTheme = theme ? DefaultTheme : DarkTheme;

  return <Provider theme={selectedTheme}>{children}</Provider>;
};
