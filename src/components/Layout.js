import React from "react";
import '../fonts/fonts.css'

export const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </nav>
      {children}
    </>
  );
};
