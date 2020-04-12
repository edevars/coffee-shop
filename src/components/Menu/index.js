import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  font-family: Arial, Helvetica, sans-serif;
  background: brown;
  height: 50px;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0;

  ul {
    list-style: none;
    margin: 0;
    display: flex;

    li {
      margin-right: 30px;
    }
  }
`;

export const Menu = () => {
  return (
    <Nav>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </Nav>
  );
};
