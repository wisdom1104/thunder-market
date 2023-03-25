import React from "react";
import styled from "styled-components";

function DetailState({ name, children }) {
  return (
    <DetailStateWrapper>
      <DetailStateTitle>{name}</DetailStateTitle>
      <DetailStateContent>{children}</DetailStateContent>
    </DetailStateWrapper>
  );
}

const DetailStateWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const DetailStateTitle = styled.div`
  position: relative;
  width: 90px;
  padding-left: 15px;
  color: rgb(153, 153, 153);

  ::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgb(204, 204, 204);
  }
`;

const DetailStateContent = styled.div`
  position: relative;
  display: flex;
`;

export default DetailState;
