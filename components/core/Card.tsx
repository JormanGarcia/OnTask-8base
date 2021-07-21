import { ChangeEventHandler, FC } from "react";
import styled, { css } from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { FiCheck, FiTrash } from "react-icons/fi";

const defaultCard = css`
  border: 1px solid ${({ theme }) => theme.palette.border};

  transition: 0.1s;
  :hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.06);
  }
`;

const darkCard = css`
  background-color: ${({ theme }) => theme.palette.main.ligth};
`;

export const Card = styled.div`
  border-radius: 18px;

  padding-bottom: 0px;
  ${({ theme }) => theme.name === "default" && defaultCard};
  ${({ theme }) => theme.name === "dark" && darkCard};
`;

export const CardTitle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 18px 18px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;

export const Title = styled(TextareaAutosize)`
  border: none;
  padding: 30px 20px 30px 20px;
  padding-bottom: 20px;
  width: 100%;
  background-color: transparent;

  color: ${({ theme }) => theme.palette.font.display};
  font-weight: 400;
  font-size: 20px;
  resize: none;

  :focus {
    outline: none;
  }
`;

export const CardBody = styled(TextareaAutosize)`
  color: ${({ theme }) => theme.palette.font.body};
  font-weight: 400;
  font-size: 16px;
  resize: none;
  border: none;
  height: auto;
  overflow: hidden;
  background-color: transparent;
  width: 100%;
  padding: 20px 40px 30px 40px;

  :focus {
    outline: none;
  }
`;

export const Check = styled(FiCheck)`
  color: ${({ theme }) => theme.palette.main.normal};
  cursor: pointer;
  font-size: 25px;
  margin-left: 15px;
`;

export const Trash = styled(FiTrash)`
  color: ${({ theme }) => theme.palette.main.normal};
  cursor: pointer;
  font-size: 25px;
`;

export const StatusIndicator = styled.span<{ isCompleted: boolean }>`
  width: 15px;
  height: 12px;
  background-color: ${({ isCompleted }) => (isCompleted ? "limegreen" : "red")};
  border-radius: 50%;
  margin: 0;
  cursor: pointer;
`;

export default Card;
