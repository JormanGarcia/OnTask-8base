import { FC } from "react";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: ${({ theme }) => theme.palette.sidebar};
  padding: 30px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
`;

const ActionButtons = styled.div`
  display: flex;
`;

const Sidebar = ({ children }: { children: any }) => (
  <StyledSidebar>{children}</StyledSidebar>
);

export const SidebarLink = styled.p<{ isActive?: boolean }>`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px 0;
  a {
    color: ${({ theme }) => theme.palette.font.display};
    text-decoration: none;
    opacity: ${({ isActive }) => (isActive ? "1" : "0.5")};

    :hover {
      opacity: 1;
    }
  }
`;

Sidebar.ActionButtons = ActionButtons;

export default Sidebar;
