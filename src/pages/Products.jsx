import React, { useEffect } from "react";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Layout from "../components/Layout";
import {
  ProductTitleBox,
  ProductInfo,
  ProductInfoBox,
  ProductInfoBtnBox,
  ProductInfoContentBox,
  ProductInfoContentWrapper,
  ProductInfoImgBox,
  ProductInfoWrapper,
  ProductPrice,
  ProductStateBox,
  ProductStateInfoBox,
  ProductStateLikeBox,
  ProductStateLikeWrapper,
  ProductStateLike,
  ProductTitle,
  ProductStateLikeInfo,
  ProductReport,
  FavoriteButtonWrapper,
  FavoriteButton,
  FavoriteToolTip,
  ThunderTalkButton,
  BuyButton,
  RelatedItemBox,
} from "../components/Product/DetailStyle";
import DetailCard from "../components/Product/DetailCard";
import DetailState from "../components/Product/DetailState";
import { Row } from "../components/Flex";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getDetail } from "../redux/modules/detailSlice";

function Products() {
  const params = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.detail);

  const pdId = params.pdId;

  console.log("posts = ", posts);
  useEffect(() => {
    dispatch(__getDetail(+pdId));

    return () => {};
  }, []);

  // 카테고리코드 => 한글 변환 switch 문
  const category = (cate) => {
    switch (cate) {
      case 1:
        return "여성의류";
      case 2:
        return "남성의류";
      case 3:
        return "신발";
      case 4:
        return "가방";
      case 5:
        return "시계/주얼리";
      case 6:
        return "패션액세서리";
      case 7:
        return "디지털/가전";
      case 8:
        return "스포츠/레저";
      default:
        return null;
    }
  };
  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <Wrapper>
      <Layout>
        <div>{category(posts?.cateCode)}</div>
        <ProductInfoWrapper>
          <ProductInfoBox>
            <ProductInfoImgBox></ProductInfoImgBox>
            <ProductInfoContentWrapper>
              <ProductInfoContentBox>
                <ProductInfo>
                  <ProductTitleBox>
                    <ProductTitle>{posts?.title}</ProductTitle>
                    <ProductPrice>{posts?.price}원</ProductPrice>
                  </ProductTitleBox>
                  <ProductStateBox>
                    <ProductStateLikeWrapper>
                      <ProductStateLikeBox>
                        <ProductStateLike>
                          <img
                            src="https://m.bunjang.co.kr/pc-static/resource/e92ccca1b575780c7cb4.png"
                            width="16"
                            height="16"
                            alt="상품 상태 아이콘"
                          />
                          <ProductStateLikeInfo>0</ProductStateLikeInfo>
                        </ProductStateLike>
                        <ProductStateLike>
                          <img
                            src="https://m.bunjang.co.kr/pc-static/resource/95ccf1c901ac09d733ec.png"
                            width="21"
                            height="13"
                            alt="상품 상태 아이콘"
                          />
                          <ProductStateLikeInfo>20</ProductStateLikeInfo>
                        </ProductStateLike>
                        <ProductStateLike>
                          <img
                            src="https://m.bunjang.co.kr/pc-static/resource/f5ac734eb33eb0faa3b4.png"
                            width="16"
                            height="16"
                            alt="상품 상태 아이콘"
                          />
                          <ProductStateLikeInfo>2일전</ProductStateLikeInfo>
                        </ProductStateLike>
                      </ProductStateLikeBox>
                      <ProductReport>
                        <img
                          src="https://m.bunjang.co.kr/pc-static/resource/0acf058f19649d793382.png"
                          width="15"
                          height="15"
                          alt="신고 아이콘"
                        />
                        신고하기
                      </ProductReport>
                    </ProductStateLikeWrapper>
                    <DetailState name="상품상태">
                      {posts?.used ? "새상품" : "중고상품"}
                    </DetailState>
                    <DetailState name="교환여부">
                      {posts?.exchange ? "교환가능" : "교환불가능"}
                    </DetailState>
                    <DetailState name="배송비">
                      {posts?.deliveryFee ? "배송비 포함" : "배송비 별도"}
                    </DetailState>
                    <ProductStateInfoBox></ProductStateInfoBox>
                  </ProductStateBox>
                </ProductInfo>
                <ProductInfoBtnBox>
                  <FavoriteButtonWrapper>
                    <FavoriteButton>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcuMDA1IDEuMDQ1aC4yMzNjLjI4LjIyOC41MzcuNDkuNzYyLjc3Ny4yMjUtLjI4OC40ODEtLjU0OS43NjItLjc3N2guMjMzYTYuMTYgNi4xNiAwIDAgMC0uMDktLjExM0M5LjY4NC4zNDQgMTAuNjI4IDAgMTEuNiAwIDE0LjA2NCAwIDE2IDIuMTEgMTYgNC43OTZjMCAzLjI5Ni0yLjcyIDUuOTgxLTYuODQgMTAuMDYyTDggMTZsLTEuMTYtMS4xNTFDMi43MiAxMC43NzcgMCA4LjA5MiAwIDQuNzk2IDAgMi4xMSAxLjkzNiAwIDQuNCAwYy45NzIgMCAxLjkxNi4zNDQgMi42OTUuOTMyYTYuMTYgNi4xNiAwIDAgMC0uMDkuMTEzeiIvPgo8L3N2Zz4K"
                        width="16"
                        height="16"
                        alt="찜 아이콘"
                      />
                      <span>찜</span>
                      <span>0</span>
                      <FavoriteToolTip>
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIuMTA2IDdsMy42NjMgNCA3LjAxNS04IiBvcGFjaXR5PSIuNDA2Ii8+Cjwvc3ZnPgo="
                          width="14"
                          height="14"
                          alt="찜 아이콘"
                        />
                        찜이해제되었습니다
                      </FavoriteToolTip>
                    </FavoriteButton>

                    <ThunderTalkButton>
                      <img
                        src="https://m.bunjang.co.kr/pc-static/resource/ea94c452c6cc8127abc1.png"
                        width="20"
                        height="19"
                        alt="번개톡 버튼 아이콘"
                      />
                      번개톡
                    </ThunderTalkButton>
                    <BuyButton>바로구매</BuyButton>
                  </FavoriteButtonWrapper>
                </ProductInfoBtnBox>
              </ProductInfoContentBox>
            </ProductInfoContentWrapper>
          </ProductInfoBox>
        </ProductInfoWrapper>

        <>
          연관상품
          <RelatedItemBox>
            {posts?.productList?.map((item) => (
              <DetailCard
                key={item.id}
                title={item.title}
                pdId={item.id}
                img={item.img}
              />
            ))}
          </RelatedItemBox>
        </>
        <div>
          <div>{posts?.desc}</div>
          <div>상점정보</div>
        </div>
        <div>광고</div>
      </Layout>
    </Wrapper>
  );
}

export default Products;
