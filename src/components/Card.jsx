import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getCards } from "../redux/modules/cardSlice";
import { Row } from "../components/Flex";
import { useNavigate } from "react-router-dom";
import PhotoSlide from "./PhotoSlide";

function Card() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <CardSection>
      <PhotoSlide />
      <Title>오늘의 상품 추천</Title>
      <CardBox>
        {cards.length === 0 ? (
          <div>No cards to display</div>
        ) : (
          cards.map((item) => {
            return (
              <StCard
                key={item.id}
                onClick={() => {
                  navigate(`/products/${item.id}`);
                  console.log(item.id);
                }}
              >
                <CardImg>
                  <img
                    style={{ width: "194px", height: "194px" }}
                    src={`${item.img}`}
                  />
                  {item.thunderPay ? (
                    <Thuner>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDM1IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NTguMDAwMDAwLCAtODQ2LjAwMDAwMCkgdHJhbnNsYXRlKDk1OC4wMDAwMDAsIDg0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIzNSIgaGVpZ2h0PSIxNiIgZmlsbD0iI0Q4MEMxOCIgcng9IjIiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik05LjIyNiAzLjAwM2wtLjU2IDQuNTYzaDIuMzI1Yy4wNDMgMCAuMDY2LjA1Mi4wMzYuMDgzbC01LjAyNCA1LjM4OGMtLjAzMy4wMzUtLjA5MS4wMDgtLjA4NS0uMDRsLjU2LTQuNTYzSDQuMTUzYy0uMDQzIDAtLjA2Ni0uMDUyLS4wMzYtLjA4M0w5LjE0IDIuOTYzYy4wMzMtLjAzNS4wOTEtLjAwOC4wODUuMDR6bTExLjgwMy43MDZ2OC41OWgtMS4zMDZWMy43MWgxLjMwNnptOC40NDcgMHY4LjU5aC0xLjM0NVYzLjcxaDEuMzQ1em0tMTAuMjY1LjA0OHY4LjM4aC0xLjI4OFY4LjEzOGgtLjc3NlY2Ljg3NWguNzc2VjMuNzU3aDEuMjg4em01LjM5OC0uMDJjLjM1MyAwIC42NzcuMDUuOTcuMTQ5LjI5NC4wOTkuNTQ4LjI1Ljc2My40NTUuMjE0LjIwMy4zODUuNDU4LjUxMS43NjUuMTI2LjMwNi4xOTkuNjYzLjIxOCAxLjA3MS4wMTIuMjc0LjAyMi41MzcuMDI4Ljc5LjAwNi4yNTEuMDEuNS4wMS43NDUgMCAuMjQ2LS4wMDQuNDkzLS4wMS43NDJzLS4wMTYuNTA3LS4wMjguNzc1Yy0uMDIuNDE0LS4wOTIuNzczLS4yMTggMS4wNzYtLjEyNi4zMDMtLjI5Ny41NTctLjUxMS43Ni0uMjE1LjIwNC0uNDcuMzU2LS43NjIuNDU1LS4yOTQuMDk5LS42MTguMTQ4LS45NzEuMTQ4LS43MTQgMC0xLjI5MS0uMi0xLjczMy0uNjAyLS40NDItLjQwMi0uNjg1LTEuMDE1LS43My0xLjgzN2wtLjAzMy0uNzg1Yy0uMDEtLjI0OC0uMDE0LS40OTYtLjAxNC0uNzQgMC0uMjQ2LjAwNS0uNDk0LjAxNC0uNzQzLjAxLS4yNDguMDIxLS41MS4wMzQtLjc4NC4wNDQtLjgyMy4yODctMS40MzUuNzI5LTEuODM2LjQ0Mi0uNDAzIDEuMDItLjYwNCAxLjczMy0uNjA0em0tNy4wODQuMTgydjEuMTg3aC0uNTMxbC0uMDE2IDUuMDc1LjYxNC0uMDI0djEuMTY3bC00LjQ3LjE5MnYtMS4xODdsLjYyNC0uMDI0LS4wMTctNS4yaC0uNTMxVjMuOTJoNC4zMjd6bTcuMDg0IDEuMDA1Yy0uMTY1IDAtLjMxMi4wMjctLjQ0LjA4MS0uMTMuMDU0LS4yNDIuMTQ0LS4zMzcuMjY4LS4wOTUuMTI0LS4xNy4yODgtLjIyNy40OTItLjA1Ny4yMDUtLjA5NS40Ni0uMTE0Ljc2Ni0uMDI1LjM3Ni0uMDM4Ljc2Ny0uMDM4IDEuMTcyIDAgLjQwNS4wMTMuNzk2LjAzOCAxLjE3Mi4wMi4zMDYuMDU3LjU2MS4xMTQuNzY1LjA1Ny4yMDQuMTMyLjM2OC4yMjcuNDkzLjA5NS4xMjQuMjA3LjIxMy4zMzYuMjY4LjEzLjA1NC4yNzYuMDguNDQuMDguMTY1IDAgLjMxMi0uMDI2LjQ0LS4wOC4xMy0uMDU1LjI0My0uMTQ0LjMzNy0uMjY4LjA5NS0uMTI1LjE3LS4yODkuMjI4LS40OTMuMDU2LS4yMDQuMDk0LS40Ni4xMTMtLjc2NS4wMjUtLjM3Ni4wMzgtLjc2Ni4wMzgtMS4xNjcgMC0uNDAyLS4wMTMtLjc5NC0uMDM4LTEuMTc3LS4wMTktLjMwNi0uMDU3LS41NjEtLjExMy0uNzY2LS4wNTctLjIwNC0uMTMzLS4zNjgtLjIyOC0uNDkyLS4wOTQtLjEyNC0uMjA3LS4yMTQtLjMzNi0uMjY4LS4xMy0uMDU0LS4yNzYtLjA4MS0uNDQtLjA4MXptLTguODk0LjE4MmgtLjcwN2wuMDE2IDUuMTUuNjc1LS4wMjYuMDE2LTUuMTI0eiIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                        alt="번개페이"
                      ></img>
                    </Thuner>
                  ) : null}
                </CardImg>
                <CardText>
                  <CardTitle>{item.title}</CardTitle>
                  <CardPriceTime>
                    <CardPrice>{item.price.toLocaleString()}</CardPrice>
                    <CardTime>
                      <span>{item.timeInterval}</span>
                    </CardTime>
                  </CardPriceTime>
                </CardText>
              </StCard>
            );
          })
        )}
      </CardBox>
    </CardSection>
  );
}

export default Card;
const CardSection = styled.section`
  width: 1024px;
  margin: auto;
  padding: 3.5rem 0px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  gap: 11px;
  column-gap: 10px;
`;

const StCard = styled.div`
  border: 1px solid rgb(238, 238, 238);
  background: rgb(255, 255, 255);
  width: 194px;
  cursor: pointer;
`;

const CardImg = styled.div`
  position: relative;
  width: 100%;
  height: 194px;
`;

const Thuner = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  gap: 5px;
`;
const CardText = styled.div`
  padding: 15px 10px;
  height: 60px;
`;
const CardTitle = styled.div`
  position: relative;
  font-size: 14px;
  padding-bottom: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const CardPriceTime = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: 20px;
`;
const CardPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const CardTime = styled.div`
  font-size: 12px;
  color: rgb(136, 136, 136);
`;
