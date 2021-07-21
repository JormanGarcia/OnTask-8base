import styled, { css } from "styled-components";

interface IButton {
  variant?: "outlined" | "opacity" | "filled";
  onlyIcon?: boolean;
  marginLeft?: number;
  marginRight?: number;
  grow?: boolean;
}

const baseStyles = css`
  color: ${({ theme }) => theme.palette.main.normal};
  background-color: ${({ theme }) => theme.palette.main.ligth};
  font-size: 14px;
  font-weight: 600;
  padding: 15px 30px;
  border: none;
  border-radius: 40px;
  transition: 0.2s, 0.1s linear opacity;
  cursor: pointer;

  :hover {
    ${({ theme }) =>
      theme.name === "dark" &&
      css`
        opacity: 0.7;
      `}

    ${({ theme }) =>
      theme.name === "default" &&
      css`
        box-shadow: 0 0 15px ${theme.palette.main.ligth};
      `}
  }
`;

const outlined = css`
  color: ${({ theme }) => theme.palette.main.normal};
  border: 1px solid ${({ theme }) => theme.palette.main.normal};
  background-color: transparent;

  :hover {
    box-shadow: none;
    background-color: ${({ theme }) => theme.palette.main.normal};
    color: ${({ theme }) => theme.palette.main.contrast};
  }
`;

const opacity = css`
  color: ${({ theme }) => theme.palette.main.normal};
  background-color: transparent;

  :hover {
    background-color: ${({ theme }) => theme.palette.main.ligth};
    box-shadow: none;
  }
`;

const Icon = css`
  padding: 12px 12.5px;
  padding-bottom: 10px;
  svg {
    font-size: 22px;
  }
`;

export const Button = styled.button<IButton>`
  ${baseStyles}

  ${({ grow }) =>
    grow &&
    css`
      width: 100%;
    `}

  ${({ variant }) => variant === "outlined" && outlined}
  ${({ variant }) => variant === "opacity" && opacity}
  ${({ onlyIcon }) => onlyIcon && Icon}
  
  margin-left: ${({ marginLeft }) => marginLeft || 0}rem;
  margin-right: ${({ marginRight }) => marginRight || 0}rem;

  :focus {
    outline: none;
  }
`;
