import React, { InputHTMLAttributes } from "react";
import { FC } from "react";
import styled, { css } from "styled-components";

interface IInput {
  margin?: string;
}

const InputLabel: FC<InputHTMLAttributes<HTMLInputElement> & IInput> = (
  props
) => {
  const { children, margin, ...inputPros } = props;

  return (
    <Label margin={margin}>
      <Input {...inputPros} />
    </Label>
  );
};

const Label = styled.div<IInput>`
  border: 1px solid ${({ theme }) => theme.palette.border};
  overflow: hidden;
  border-radius: 40px;
  padding: 13px 30px;

  ${({ theme }) =>
    theme.name === "dark" &&
    css`
      background-color: ${theme.palette.main.ligth};
      border: none;
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.border};
  background-color: transparent;

  ${({ theme }) =>
    theme.name === "dark" &&
    css`
      color: ${theme.palette.font.display};
    `}

  :focus {
    outline: none;
  }
`;

export default InputLabel;
