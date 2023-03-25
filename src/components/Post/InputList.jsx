import React from "react";
import styled from "styled-components";

function InputList({ important, name, children }) {
  return (
    <ListWrapper>
      <ListTitle>
        {name}
        {important ? <StAster>*</StAster> : null}
      </ListTitle>
      <ListContent>{children}</ListContent>
    </ListWrapper>
  );
}

const StAster = styled.span`
  color: red;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0px;
  border-bottom: 1px solid rgb(220, 219, 228);
`;

const ListTitle = styled.div`
  width: 10.5rem;
  font-size: 18px;
`;

const ListContent = styled.div`
  flex: 1 1 0%;
  position: relative;
`;

export default InputList;
