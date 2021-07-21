import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  name: "default",
  palette: {
    main: {
      darker: "rebeccapurple",
      normal: "rgba(0,118,255,0.9)",
      ligth: "rgba(0,118,255,0.1)",
      contrast: "white",
    },
    secondary: "violet",
    background: "#fefefe",
    font: {
      body: "rgba(8,29,52,.70)",
      display: "rgba(8,29,52,.95)",
      ligth: "rgba(0,0,0,38)",
    },
    shadowColor: "rgba(0,118,255,0.5)",
    card: "#000",
    sidebar: "#f7f7f7",
    border: "rgba(0,0,0,.3)",
  },
};

export default theme;
