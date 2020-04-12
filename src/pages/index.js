import React from "react";
import { Layout } from "../components/Layout/index";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <Layout>
      <Header />
      <AboutUs />
    </Layout>
  );
};

export default Home;
