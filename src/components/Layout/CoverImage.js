import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query profileImage {
        Image: file(relativePath: { eq: "cover.png" }) {
          childImageSharp {
            fluid(maxWidth: 1980, quality: 100) {
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
          style={{
              height: "100%",
          }}
        />
      );
    }}
  />
);
