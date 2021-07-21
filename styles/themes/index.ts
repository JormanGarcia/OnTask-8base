import defaultTheme from "./defaultTheme";

const themes = {
  defaultTheme,
};

export type Themes = keyof typeof themes;
export default themes;
