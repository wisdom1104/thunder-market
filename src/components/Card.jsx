import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getCards } from "../redux/modules/cardSlice";

function Card() {
  const dispatch = useDispatch();
  const { isLoading, error, cards } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(__getCards());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  console.log(cards);
  return (
    <div>
      {cards.length === 0 ? (
        <div>No cards to display</div>
      ) : (
        cards.map((item) => {
          return (
            <StCard key={item.id}>
              <CardImg src={`${item.img}`} />
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{item.price}</div>
              <div>{item.thunderPay}</div>
              <div>작성시간</div>
            </StCard>
          );
        })
      )}
    </div>
  );
}

export default Card;

const StCard = styled.div`
  border: 1px solid;
`;
const CardImg = styled.img`
  width: 200px;
`;
