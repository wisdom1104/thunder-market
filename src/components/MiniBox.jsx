import React from "react";
import styled from "styled-components";

function MiniBox() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <>
      <StMiniBox>
        <MiniInnerBox>
          <FavoriteBox>
            <FavoritText>찜한상품</FavoritText>
            <HeartBox>
              <Heart>
                <img
                  src="https://m.bunjang.co.kr/pc-static/resource/11198bb2dc24672fee03.png"
                  width="9"
                  height="9"
                  alt="찜 아이콘"
                />
                0
              </Heart>
            </HeartBox>
          </FavoriteBox>
          <RcentBox>
            <RcentText>최근본상품</RcentText>
            <RcentCount>
              <Count></Count>
            </RcentCount>
            <RcentContent>
              <img
                src="https://m.bunjang.co.kr/pc-static/resource/2e45ed358cb7e120d519.png"
                width="28"
                height="16"
                alt="빈 최근본상품 아이콘"
              />
              <RcentContentText>
                최근 본 상품
                <br />
                이
                <br />
                없습니다.
              </RcentContentText>
            </RcentContent>
          </RcentBox>
          <BtnBox>
            <Btn onClick={scrollToTop}>TOP</Btn>
          </BtnBox>
        </MiniInnerBox>
      </StMiniBox>
    </>
  );
}

export default MiniBox;

const StMiniBox = styled.div`
  position: absolute;
  top: 100px;
  right: 100px;
  z-index: 20;
  font-synthesis: none;
  -webkit-font-smoothing: antialiased;
  direction: ltr;
  text-align: left;
  color: rgb(33, 33, 33);
  letter-spacing: -0.5px;
`;

const MiniInnerBox = styled.div`
  width: 90px;
`;
const FavoriteBox = styled.div`
  padding: 10px 0px;
  width: 100%;
  border: 1px solid rgb(102, 102, 102);
  background: rgb(255, 255, 255);
  margin-bottom: 6px;
`;

const FavoritText = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: rgb(102, 102, 102);
  text-align: center;
  margin-bottom: 8px;
`;

const HeartBox = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

const Heart = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 12px;
  color: rgb(204, 204, 204);
  font-weight: 600;
  gap: 5px;
`;

const RcentBox = styled.div`
  padding: 10px 0px;
  width: 100%;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  margin-bottom: 6px;
`;
const RcentText = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: rgb(102, 102, 102);
  text-align: center;
  margin-bottom: 8px;
`;

const RcentCount = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Count = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 12px;
  color: rgb(247, 0, 0);
  font-weight: 600;
  width: 38px;
  border-bottom: 2px dotted rgb(136, 136, 136);
  /* padding-bottom: 10px; */
`;

const RcentContent = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(204, 204, 204);
  font-size: 12px;
`;

const RcentContentText = styled.div`
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.4;
  margin-top: 5px;
`;

const BtnBox = styled.div`
  margin-bottom: 0px;
  padding: 0px;
  border-color: rgb(229, 229, 229);
  width: 100%;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
`;

const Btn = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  font-weight: 600;
  font-size: 13px;
  color: rgb(102, 102, 102);
  background-color: transparent;
  cursor: pointer;
  border: none;
`;
