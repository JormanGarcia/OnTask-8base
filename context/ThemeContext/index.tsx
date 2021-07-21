import { useEffect } from "react";
import { useMemo } from "react";
import { createContext, FC, useContext, useState } from "react";
import { themeContext } from "./themeContext";

const ThemeContext = createContext<themeContext>({
  theme: true,
  toggleTheme: () => console.log("Select Theme"),
});

export const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(JSON.parse(localStorage.getItem("theme")!));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => setTheme(!theme);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
