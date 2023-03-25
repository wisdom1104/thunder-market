import React from "react";
import styled from "styled-components";

function Wrapper({ children, ...rest }) {
  return <StWrapper {...rest}>{children}</StWrapper>;
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1236px;
  margin: auto;
`;

export default Wrapper;
