import React from "react";
import { Layout } from "../components/Layout/index";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Food from "../components/Food";

const Home = () => {
  return (
    <Layout>
      <Header />
      <AboutUs />
      <Food />
    </Layout>
  );
};

export default Home;
