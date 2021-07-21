import styled, { css } from "styled-components";

interface ITypography {
  variant?: "body" | "h1" | "h2" | "subtitle";
  colorized?: boolean;
  align?: "left" | "center" | "right";
  margin?: string;
  link?: boolean;
}

const baseStyles = css`
  color: ${({ theme }) => theme.palette.font.body};
  font-size: 18px;
  font-weight: 500;
  transition: 0.2s color;
`;

const Link = css`
  font-size: 18px;
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.palette.main.normal};
    text-decoration: none;
  }
`;

const h1 = css`
  font-weight: 800;
  font-size: 56px;
  color: ${({ theme }) => theme.palette.font.display};
`;

const h2 = css`
  font-weight: 600;
  font-size: 40px;
  color: ${({ theme }) => theme.palette.font.display};
`;

const subtitle = css`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.font.body};
`;

const mainColor = css`
  color: ${({ theme }) => theme.palette.main.normal};
`;

export const Typography = styled.p<ITypography>`
  ${baseStyles}
  text-align: ${({ align }) => align && align};

  ${({ variant }) => variant === "h1" && h1}
  ${({ variant }) => variant === "h2" && h2}
  ${({ variant }) => variant === "subtitle" && subtitle}

  ${({ colorized }) => colorized && mainColor}
  ${({ link }) => link && Link}

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;
