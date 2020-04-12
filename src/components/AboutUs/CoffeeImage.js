import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query aboutUsImage {
        Image: file(relativePath: { eq: "aboutus.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <Img
          fluid={data.Image.childImageSharp.fluid}
        />
      );
    }}
  />
);
