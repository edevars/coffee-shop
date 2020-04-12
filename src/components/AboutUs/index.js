import React from "react";
import styled from "styled-components";
import CoffeeImage from "./CoffeeImage";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .image {
    width: 400px;
    margin-top: 75px;
    .gatsby-image-wrapper {
      border-radius: 50%;
    }
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin: 0 auto;

  .text-wrapper {
    h2 {
      display: inline-block;
      font-size: 75px;
      color: #83543e;
      margin-bottom: 20px;
      border-bottom: 5px solid #ffc400;
      padding-bottom: 20px;
    }
    p {
      font-size: 21px;
      max-width: 600px;
    }
  }
`;

const AboutUs = () => {
  return (
    <Section>
      <ImageWrapper>
        <div className="image">
          <CoffeeImage />
        </div>
      </ImageWrapper>
      <div className="text-wrapper">
        <h2>¿Quienes somos?</h2>
        <p>
          Kafekali es un espacio acogedor y agradable en el que puede encontrar
          café y chocolates 100 % mexicanos , acompañados de algún alimento de
          origen extranjero , característicos de otras regiones del mundo.{" "}
        </p>
      </div>
    </Section>
  );
};

export default AboutUs;
