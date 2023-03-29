import React from "react";
import styled from "styled-components";

const DetailButton = ({ children, onClick }) => {
  return <StButton onClick={onClick}>{children}</StButton>;
};

const StButton = styled.button`
  margin: 2px;
  border: 1px solid lightgrey;
  cursor: pointer;
  width: 50px;
  height: 30px;
  background-color: transparent;
  &:hover {
    background-color: lightgray;
  }
`;

export default DetailButton;
