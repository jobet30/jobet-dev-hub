import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="py-20 px-6 text-white max-w-7xl mx-auto">
        <Hero />
      </div>
    </Layout>
  );
};

export default IndexPage;
