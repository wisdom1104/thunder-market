import styled from "styled-components";

export const ProductInfoWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  width: 1024px;
  margin: auto;
`;

export const ProductInfoBox = styled.div`
  display: flex;
  padding: 30px 0px;
`;

export const ProductInfoImgBox = styled.div`
  margin-right: 40px;
  flex-shrink: 0;
  width: 430px;
  height: 430px;
  border: 1px solid;
`;

export const ProductInfoContentWrapper = styled.div`
  flex-grow: 1;
`;

export const ProductInfoContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
`;

export const ProductInfoBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductTitleBox = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(238, 238, 238);
  width: 100%;
`;

export const ProductTitle = styled.div`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 600;
  line-height: 1.4;
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const ProductStateBox = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
`;

export const ProductStateLikeWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 15px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`;

export const ProductStateLikeBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ProductStateLike = styled.div`
  display: flex;
  align-items: center;
  color: rgb(204, 204, 204);
  font-size: 16px;
  height: 100%;

  ::after {
    content: "";
    width: 1px;
    height: 12px;
    border-right: 1px solid rgb(238, 238, 238);
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const ProductStateLikeInfo = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
`;

export const ProductReport = styled.button`
  color: rgb(204, 204, 204);
  font-size: 16px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  background-color: transparent;
`;

export const ProductStateInfoBox = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
`;

export const FavoriteButtonWrapper = styled.div`
  flex: 1 1 0%;
  font-weight: 600;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  height: 56px;
  font-size: 18px;
  align-items: center;
`;

export const FavoriteButton = styled.button`
  width: 100%;
  height: 100%;
  font-weight: 600;
  margin-right: 10px;
  background: rgb(204, 204, 204);
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  position: relative;
  border: 1px solid transparent;
`;

export const FavoriteToolTip = styled.div`
  position: absolute;
  bottom: -50px;
  left: 0px;
  margin-right: 10px;
  width: 100%;
  border: 1px solid rgb(51, 51, 51);
  font-size: 14px;
  height: 38px;
  display: none;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

export const ThunderTalkButton = styled.button`
  width: 100%;
  height: 100%;
  font-weight: 600;
  background: rgb(255, 164, 37);
  border: 1px solid rgb(243, 150, 20);
  color: rgb(255, 255, 255);
  font-weight: 700;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 100%;
  font-weight: 600;
  background: rgb(247, 0, 0);
  border: 1px solid rgb(223, 0, 0);
  color: rgb(255, 255, 255);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const RelatedItemBox = styled.div`
  display: flex;
  overflow: hidden;
`;
