import React from "react";

import InLogginLayout from "./InLogginLayout";

const Layout: React.FC = ({ children }) => {
  return <InLogginLayout>{children}</InLogginLayout>;
};

export default Layout;
