import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <StFooter>
        <FooterBox>
          <FirstContent>회사소개</FirstContent>
          <MiddleContent>이용약관</MiddleContent>
          <MiddleContent>운영정책</MiddleContent>
          <MiddleContent>
            <b style={{ fontWeight: "bold" }}>개인정보처리방침</b>
          </MiddleContent>
          <MiddleContent>청소년보호정책</MiddleContent>
          <LastContent>광고제휴</LastContent>
        </FooterBox>
      </StFooter>
    </>
  );
}

export default Footer;

const StFooter = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  border-top: 1px solid rgb(229, 229, 229);
  border-bottom: 1px solid rgb(229, 229, 229);
  height: 65px;
  width: 1024px;
  align-items: center;
  box-sizing: border-box;
`;

const FooterBox = styled.div`
  height: 65px;
  width: 1024px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  /* justify-content: center; */
`;

const FirstContent = styled.a`
  padding-left: 0px;
  padding: 0px 25px;
  text-align: center;
  display: block;
  font-size: 13px;
  color: rgb(51, 51, 51);
  position: relative;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  ::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    width: 1px;
    height: 14px;
    border-right: 1px solid rgb(204, 204, 204);
    box-sizing: border-box;
  }
`;

const MiddleContent = styled.a`
  padding-left: 0px;
  padding: 0px 25px;
  text-align: center;
  display: block;
  font-size: 13px;
  color: rgb(51, 51, 51);
  position: relative;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  ::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    width: 1px;
    height: 14px;
    border-right: 1px solid rgb(204, 204, 204);
    box-sizing: border-box;
  }
`;

const LastContent = styled.a`
  padding-left: 0px;
  padding: 0px 25px;
  text-align: center;
  display: block;
  font-size: 13px;
  color: rgb(51, 51, 51);
  position: relative;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
`;
