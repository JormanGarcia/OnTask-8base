import React, { FC } from "react";
import styled from "styled-components";

export const Container: FC = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`;
