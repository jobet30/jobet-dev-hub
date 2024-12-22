import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default IndexPage;
