import React from "react";
import { Layout } from "../components/Layout/index";
import CoverImage from "../components/Layout/CoverImage";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
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

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <Image>
          <CoverImage />
        </Image>
        <TitleWrapper>
          <Title>KAFEKALI<br/>AXKAN</Title>
        </TitleWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Home;
