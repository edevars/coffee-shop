import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

const StyledFooter = styled.footer`
  margin-top: 120px;
  background: #1f1f1f;
  color: white;
  padding: 40px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Instagram: @kafekali_axkan</p>
      <p>Facebook: Kafekali AXKAN</p>
      <p>
        Dirección: Camino a la Aurora, local A, San Buenaventura, Ixtapaluca,
        Edo.
      </p>
      México.
    </StyledFooter>
  );
};

export default Footer;
