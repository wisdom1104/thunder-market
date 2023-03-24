import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import Layout from "../components/Layout";
import { cookies } from "../shared/cookies";
import Card from "../components/Card";
import LoginModal from "../components/LoginModal";

function Home() {
  let [isLogin, setIsLogin] = useState(false);

  return (
    <Wrapper>
      <Layout isLogin={isLogin} setIsLogin={setIsLogin}>
        <LoginModal isLogin={isLogin} setIsLogin={setIsLogin} />
        <Card />
      </Layout>
    </Wrapper>
  );
}

export default Home;
