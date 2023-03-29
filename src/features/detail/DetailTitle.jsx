import React from "react";
import styled from "styled-components";

const DetailTitle = ({ children }) => {
  return (
    <StTitleWrapper>
      <StTitle>{children}</StTitle>
    </StTitleWrapper>
  );
};

const StTitle = styled.p`
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
`;

const StTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px;
`;

export default DetailTitle;
