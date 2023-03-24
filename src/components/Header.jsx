import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <h2>여기에 페이지 제목이 들어갑니다.</h2>
    </StHeader>
  );
}

const StHeader = styled.div`
  height: 100px;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 10px;
`;

export default Header;
