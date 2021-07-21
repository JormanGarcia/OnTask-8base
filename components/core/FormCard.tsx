import React from "react";
import styled from "styled-components";

interface IForm {
  width?: number | string;
}

export const FormCard = styled.form<IForm>`
  padding: 30px 20px 40px 20px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 18px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  width: ${({ width }) => `${width}px` || "400px"};
`;
