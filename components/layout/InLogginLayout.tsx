import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../context/ThemeContext";
import { Button } from "../core/Button";
import InputLabel from "../core/InputLabel";
import { Container } from "./Container";
import Navbar from "./Navbar";
import Sidebar, { SidebarLink } from "./Sidebar";
import { Typography } from "../core/Typography";
import FlexSeparator from "../core/FlexSeparator";
import ThemeSwitcher from "./ThemeSwitcher";

import Link from "next/link";
import { useMutationHook } from "../../hooks/useMutationHook";

import { useSearchContext } from "../../context/SearchContext";
import { useQuery } from "@apollo/client";
import { GET_GROUP_NAMES } from "../../api/query";
import { useRouter } from "next/router";

import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const InLogginLayout: FC = ({ children }) => {
  const { search, setSearch } = useSearchContext();
  const { toggleTheme, theme } = useThemeContext();

  const { data, loading, refetch } = useQuery(GET_GROUP_NAMES, {
    fetchPolicy: "no-cache",
  });

  const { query } = useRouter();

  const { AddNote, AddGroup, AddNoteOnGroup } = useMutationHook();

  const addNoteHandler = async () => {
    if (query.group) {
      const result = await AddNoteOnGroup(query.group!);
      console.log(result);
      return;
    }
    AddNote();
  };

  return (
    <>
      <Container>
        <Sidebar>
          <Typography align="center" variant="h1">
            OnTask
          </Typography>

          <Nav>
            <SidebarLink isActive={!query.group}>
              <Link href="/notes/">All Notes</Link>
            </SidebarLink>

            <Typography margin="20px 0 20px 0" colorized>
              All Groups
            </Typography>

            {loading ? (
              <div>loading...</div>
            ) : (
              data.groupsList.items.map((x: any) => (
                <SidebarLink key={x.id} isActive={query.group === x.id}>
                  <Link href={"/notes/" + x.id}>{x.name}</Link>
                </SidebarLink>
              ))
            )}
          </Nav>
          <FlexSeparator />

          <Sidebar.ActionButtons>
            <Button
              grow
              onClick={async () => {
                const newGroup = prompt("create New Group", "");

                if (!newGroup) {
                  alert("Invalid Group Name");
                  return;
                }

                await AddGroup(newGroup);

                refetch();
              }}
            >
              Add Group
            </Button>
          </Sidebar.ActionButtons>
        </Sidebar>
        <Main>
          <Navbar>
            <div>
              <Button marginRight={1} onClick={() => addNoteHandler()}>
                + Add Task
              </Button>

              <InputLabel
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Looking Something?"
              />
            </div>

            <div>
              <ThemeSwitcher theme={theme} onClick={() => toggleTheme()} />
            </div>
          </Navbar>

          {children}
        </Main>
      </Container>
    </>
  );
};

const Main = styled.main`
  overflow-y: auto;
  padding: 20px 40px 0 40px;
`;

const Nav = styled.div`
  margin-top: 200px;
`;

export default InLogginLayout;
