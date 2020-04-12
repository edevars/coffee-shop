import React from "react";
import { Menu } from "../Menu";
import "../../fonts/fonts.css";
import styled from 'styled-components';

const Wrapper = styled.div`
    
`;



export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Menu />
      {children}
    </Wrapper>
  );
};
