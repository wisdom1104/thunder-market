import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function Layout({ children, isLogin, setIsLogin }) {
  return (
    <>
      <Nav />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
