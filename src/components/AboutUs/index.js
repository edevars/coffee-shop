import React from "react";
import styled from "styled-components";
import CoffeeImage from "./CoffeeImage";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  grid-area: Pic;

  .image {
    width: 400px;
    margin-top: 75px;
    .gatsby-image-wrapper {
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    .image {
      width: 280px;
    }
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-areas: "Pic Title" "Pic Description";
  width: 80%;
  margin: 0 auto;

  .text-wrapper {
    h2 {
      display: inline-block;
      grid-area: Title;
      font-size: 75px;
      color: #83543e;
      margin-bottom: 20px;
      border-bottom: 5px solid #ffc400;
      padding-bottom: 20px;
    }
    p {
      grid-area: Description;
      font-size: 21px;
      max-width: 600px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-areas: "Title" "Pic" " Description";
    margin-left: 10px;
    .text-wrapper {
      h2 {
        font-size: 32px;
      }
      p {
        font-size: 21px;
      }
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
