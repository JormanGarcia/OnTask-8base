import React, { FC } from "react";
import styled from "styled-components";

const Navbar: FC = ({ children }) => {
  return <Nav>{children}</Nav>;
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-top: 25px;
  margin-bottom: 25px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`;

export default Navbar;
