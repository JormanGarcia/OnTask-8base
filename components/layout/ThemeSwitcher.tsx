import React, { FC } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "../core/Button";

interface IThemeSwitcher {
  theme: boolean;
  onClick: () => void;
}

const ThemeSwitcher: FC<IThemeSwitcher> = ({ theme, onClick }) => {
  return (
    <Button onlyIcon marginLeft={1} onClick={onClick}>
      {theme ? <FiMoon /> : <FiSun />}
    </Button>
  );
};

export default ThemeSwitcher;
