import React from "react";
import styled from "styled-components";
import CoverImage from "./CoverImage";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 720px) {
    height: 200px;
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`;

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 720px) {
    height: 200px;
  }
`;

const TitleWrapper = styled.div`
  margin-top: 10vw;
  position: absolute;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media screen and (max-width: 720px) {
    margin-top: 60px;
  }
`;

const Title = styled.h1`
  font-size: 5vw;
  display: inline-block;
  font-weight: normal;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  line-height: 6vw;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Image>
        <CoverImage />
      </Image>
      <TitleWrapper>
        <Title>
          KAFEKALI
          <br />
          AXKAN
        </Title>
      </TitleWrapper>
    </StyledHeader>
  );
};

export default Header;
