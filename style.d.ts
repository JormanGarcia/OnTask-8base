import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "default" | "dark";
    palette: {
      main: {
        ligth: CSSProperties["color"];
        normal: CSSProperties["color"];
        darker: CSSProperties["color"];
        contrast: CSSProperties["color"];
      };
      secondary: CSSProperties["color"];
      background: CSSProperties["color"];
      font: {
        body: CSSProperties["color"];
        display: CSSProperties["color"];
        ligth: CSSProperties["color"];
      };
      shadowColor: CSSProperties["color"];
      card: CSSProperties["color"];
      sidebar: CSSProperties["color"];
      border: CSSProperties["color"];
    };
  }
}
