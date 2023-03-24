import React from "react";
import Wrapper from "../components/Wrapper";
import { Row } from "../components/Flex";
import Layout from "../components/Layout";
import { cookies } from "../shared/cookies";
import Card from "../components/Card";

function Home() {
  return (
    <Wrapper>
      <Layout>
        <Card />
      </Layout>
    </Wrapper>
  );
}

export default Home;
