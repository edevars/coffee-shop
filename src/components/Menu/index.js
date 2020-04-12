import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: #ffc400;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  opacity: 0.7;

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
        <li>Nosotros</li>
        <li>Menú</li>
        <li>Contacto</li>
      </ul>
    </Nav>
  );
};
