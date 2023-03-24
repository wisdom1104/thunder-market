import React from "react";
import Wrapper from "../components/Wrapper";
import { Row } from "../components/Flex";
import Layout from "../components/Layout";
import { cookies } from "../shared/cookies";

function Home() {
  return (
    <Wrapper>
      <Layout>여기가 홈입니다.</Layout>
    </Wrapper>
  );
}

export default Home;
