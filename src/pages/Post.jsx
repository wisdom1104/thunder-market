import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import Layout from "../components/Layout";
import InputList from "../components/Post/InputList";
import styled from "styled-components";
import { Column } from "../components/Flex";
import FloaingFooter from "../components/Post/FloaingFooter";
import { useInput } from "../hooks/useInput";

function Post() {
  const [checkList, setCheckList] = useState([]);

  const newItem = {
    img: null,
    title: "",
    cateCode: "",
    used: false,
    exchange: false,
    price: "",
    deliveryFee: false,
    desc: "",
    isDone: false,
    quantity: 1,
    thunderPay: false,
  };

  const [
    inputValue,
    onChangeHandler,
    onCheckHandler,
    fileInputHandler,
    submitInputHandler,
  ] = useInput(
    newItem,
    // __addItem,
    null
  );

  const checkAll = (e) => {
    e.target.checked
      ? setCheckList(["firstTerm", "secondTerm", "thirdTerm"])
      : setCheckList([]);
  };

  return (
    <Wrapper>
      <Layout>
        <div>카테고리</div>
        <div>기본정보</div>
        <PostList onSubmit={submitInputHandler}>
          <InputList name="상품이미지" important>
            <StPhotoInputBox>
              이미지 등록
              <StPhotoInput
                type="file"
                name="img"
                accept="image/jpg, image/jpeg, image/png"
                onChange={fileInputHandler}
                multiple=""
              />
            </StPhotoInputBox>
            <StPhotoInputGuide>
              <b>* 상품 이미지는 640x640에 최적화 되어 있습니다.</b>
              <br />
              - 상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로
              보여집니다.
              <br />
              - 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.
              <br />
              - 이미지를 클릭할 경우 원본 이미지를 확인할 수 있습니다
              <br />
              - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.
              <br />
              - 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.
              <br />
              최대 지원 사이즈인 640 X 640으로 리사이즈 해서 올려주세요.(개당
              이미지 최대 10M)
            </StPhotoInputGuide>
          </InputList>
          <InputList name="제목" important>
            <input
              type="text"
              name="title"
              value={inputValue.title}
              placeholder="상품 제목을 입력해주세요."
              onChange={onChangeHandler}
            />
            <span>상품명을 2자 이상 입력해주세요.</span>
            <span>0/40</span>
          </InputList>
          <InputList name="카테고리" important>
            <select
              name="cateCode"
              value={inputValue.cateCode}
              id=""
              onChange={onChangeHandler}
            >
              <option value="100">여성의류</option>
              <option value="200">남성의류</option>
              <option value="300">신발</option>
              <option value="400">가방</option>
              <option value="500">시계/주얼리</option>
              <option value="600">패션액세서리</option>
              <option value="700">디지털/가전</option>
              <option value="800">스포츠/레저</option>
            </select>
            <span>선택한 카테고리 :</span>
          </InputList>
          <InputList name="상태" value={inputValue.used} important>
            <label>
              <input
                type="radio"
                name="used"
                value="true"
                id=""
                onChange={onChangeHandler}
              />
              중고상품
            </label>
            <label>
              <input
                type="radio"
                name="used"
                value="false"
                id=""
                onChange={onChangeHandler}
              />
              새상품
            </label>
          </InputList>
          <InputList name="교환" value={inputValue.exchange} important>
            <label>
              <input
                type="radio"
                name="exchange"
                value="false"
                id=""
                onChange={onChangeHandler}
              />
              교환불가
            </label>
            <label>
              <input
                type="radio"
                name="exchange"
                value="true"
                id=""
                onChange={onChangeHandler}
              />
              교환가능
            </label>
          </InputList>

          <InputList name="가격" important>
            <label htmlFor="">
              <input
                type="text"
                name="price"
                id=""
                placeholder="숫자만 입력해주세요."
                value={inputValue.price}
                onChange={onChangeHandler}
              />
              원
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="deliveryFee"
                value={inputValue.deliveryFee}
                onChange={onCheckHandler}
                id=""
              />
              배송비포함
            </label>
          </InputList>
          <InputList name="설명" important>
            <input
              type="text"
              name="desc"
              placeholder="여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해 주세요. (10자 이상)
안전하고 건전한 거래 환경을 위해 과학기술정보통신부, 한국인터넷진흥원과 번개장터(주)가 함께 합니다."
              value={inputValue.desc}
              onChange={onChangeHandler}
            />
            <div>
              <span>혹시 카카오톡ID를 적으셨나요?</span>
              <span>0/2000</span>
            </div>
          </InputList>
          <InputList name="수량">
            <label htmlFor="">
              <input
                type="text"
                name="quantity"
                value={inputValue.quantity}
                onChange={onChangeHandler}
                id=""
              />
              개
            </label>
          </InputList>
          <div>빠른판매</div>
          <InputList name="옵션">
            <Column>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="all"
                  id=""
                  onChange={checkAll}
                  checked={checkList.length === 3 ? true : false}
                />
                안전결제 환영
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="firstTerm"
                  id=""
                  checked={checkList.includes("firstTerm") ? true : false}
                  readOnly
                />
                안전결제(번개페이) 요청을 거절하지 않는 대신 혜택을 받을 수
                있어요.
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="secondTerm"
                  id=""
                  checked={checkList.includes("firstTerm") ? true : false}
                  readOnly
                />
                내 상품을 먼저 보여주는 전용 필터로 더 빠르게 판매할 수 있어요.
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="thirdTerm"
                  id=""
                  checked={checkList.includes("firstTerm") ? true : false}
                  readOnly
                />
                번개페이 배지로 더 많은 관심을 받을 수 있어요.
              </label>
            </Column>
          </InputList>
          <input type="submit" value="등록하기" />
          {/* <FloaingFooter /> */}
        </PostList>
      </Layout>
    </Wrapper>
  );
}

const PostList = styled.form`
  display: block;
  width: 1024px;
  margin: auto;
`;

const StPhotoInputBox = styled.div`
  width: 202px;
  height: 202px;
  position: relative;
  border: 1px solid rgb(230, 229, 239);
  background: rgb(250, 250, 253);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgb(155, 153, 169);
  font-size: 1rem;
  margin-right: 1rem;

  ::before {
    content: "";
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 2rem;
    height: 2rem;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0RCRTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI4LjQ3MSAzMkgzLjUzYy0uOTcxIDAtMS44OTQtLjQyMi0yLjUyOS0xLjE1N2wtLjAyNi0uMDNBNCA0IDAgMCAxIDAgMjguMTk4VjguNjA3QTQgNCAwIDAgMSAuOTc0IDUuOTlMMSA1Ljk2YTMuMzQzIDMuMzQzIDAgMCAxIDIuNTI5LTEuMTU2aDIuNTM0YTIgMiAwIDAgMCAxLjUzNy0uNzJMMTAuNC43MkEyIDIgMCAwIDEgMTEuOTM3IDBoOC4xMjZBMiAyIDAgMCAxIDIxLjYuNzJsMi44IDMuMzYzYTIgMiAwIDAgMCAxLjUzNy43MmgyLjUzNGMuOTcxIDAgMS44OTQuNDIzIDIuNTI5IDEuMTU3bC4wMjYuMDNBNCA0IDAgMCAxIDMyIDguNjA2djE5LjU5MWE0IDQgMCAwIDEtLjk3NCAyLjYxN2wtLjAyNi4wM0EzLjM0MyAzLjM0MyAwIDAgMSAyOC40NzEgMzJ6TTE2IDkuNmE4IDggMCAxIDEgMCAxNiA4IDggMCAwIDEgMC0xNnptMCAxMi44YzIuNjQ3IDAgNC44LTIuMTUzIDQuOC00LjhzLTIuMTUzLTQuOC00LjgtNC44YTQuODA1IDQuODA1IDAgMCAwLTQuOCA0LjhjMCAyLjY0NyAyLjE1MyA0LjggNC44IDQuOHoiLz4KPC9zdmc+Cg==);
    margin-bottom: 1rem;
  }
`;

const StPhotoInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0;
  cursor: pointer;
  font-size: 0px;
`;

const StPhotoInputGuide = styled.div`
  margin-top: 1.5rem;
  color: rgb(74, 164, 255);
  line-height: 1.5;
  font-size: 14px;
`;
export default Post;
