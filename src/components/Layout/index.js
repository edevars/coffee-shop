import React from "react";
import { Menu } from "../Menu";
import "../../fonts/fonts.css";
import styled from "styled-components";
import Footer from "../Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};
