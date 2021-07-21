import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  name: "dark",
  palette: {
    main: {
      darker: "rebeccapurple",
      normal: "#64ffda",
      ligth: "#30475e",
      contrast: "#0a192f",
    },
    secondary: "violet",
    background: "#0a192f",
    font: {
      body: "#8892b0",
      display: "#ccd6f6",
      ligth: "rgba(255,255,255,.30)",
    },
    shadowColor: "#112240",
    card: "#112240",
    sidebar: "#112240",
    border: "rgba(255,255,255,0.2)",
  },
};

export default theme;
