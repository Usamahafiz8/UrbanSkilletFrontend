// index.js or index.tsx
import React from "react";
import Layout from "../components/layout";
import Indexpage from "../components/pages/home";

const HomePage = () => {
  return (
    <Layout>
      <Indexpage />
    </Layout>
  );
};

export default HomePage;
