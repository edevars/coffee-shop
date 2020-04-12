import React from "react";
import styled from "styled-components";
import FoodImage from "./FoodImage";

const FoodWrapper = styled.div`
  h5 {
    font-size: 21px;
  }
  li {
    margin-top: 8px;
  }
`;

const FoodItem = ({ src, description, children }) => {
  return (
    <FoodWrapper>
      <h5>{description}</h5>
      <FoodImage src={src} />
      {children}
    </FoodWrapper>
  );
};

export default FoodItem;
