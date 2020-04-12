import React from "react";
import { Menu } from "../Menu";
import "../../fonts/fonts.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};
