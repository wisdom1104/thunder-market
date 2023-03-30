import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import Layout from "../components/Layout";
import InputList from "../features/post/InputList";
import { Column, Row } from "../components/Flex";
import FloaingFooter from "../features/post/FloaingFooter";
import PostTextInput from "../features/post/PostTextInput";
import { useInput } from "../hooks/useInput";
import { __editDetail } from "../redux/modules/detailSlice";
import { useSelector } from "react-redux";
import { cookies } from "../shared/cookies";
import { useNavigate, useParams } from "react-router";
import {
  PostList,
  StPhotoInputWrapper,
  StPhotoInputGuide,
  StPhotoPreview,
  StPhotoInputBox,
  StPhotoInput,
  StDescInput,
  CateButtonBox,
  CateButton,
  CateButtonWrapper,
} from "../features/post/PostStyle";
import { useCategory } from "../hooks/useCategory";
import { usePreview } from "../hooks/usePreview";

function Edit() {
  const params = useParams();
  const pdId = params.pdId;
  // 이전 페이지에서 리덕스 스토어에 저장된 값 그대로 가져옴
  const { posts, isLoading } = useSelector((state) => state.detail);
  const newItem = {
    img: null,
    title: posts?.title,
    cateCode: posts?.cateCode,
    used: posts?.used,
    exchange: posts?.exchange,
    price: posts?.price?.toLocaleString(),
    deliveryFee: posts?.deliveryFee,
    desc: posts?.desc,
    isDone: posts?.isDone,
    quantity: posts?.quantity,
    thunderPay: posts?.thunderPay,
  };

  const token = cookies.get("token");
  const navigate = useNavigate();

  // 기존 이미지 state 설정
  const [exPhoto, setExPhoto] = useState(posts?.img);

  // 입력 폼 커스텀 훅
  const {
    inputValue,
    onChangeHandler,
    submitInputHandler,
    onCheckHandler,
    changeNumberHandler,
    fileInputHandler,
    onSelectHandler,
    setInputValue,
  } = useInput(newItem, __editDetail, pdId);

  // 이미지 미리보기 커스텀 훅
  const { preview, previewUrl } = usePreview();

  useEffect(() => {
    if (!token) {
      alert("로그인이 필요합니다!");
      navigate("/");
    }
    preview(inputValue.img);

    return () => {};
  }, [inputValue.img, exPhoto]);

  // 카테고리코드 => 한글 변환 switch 문
  const { category } = useCategory();

  // 번개페이 한꺼번에 체크하기 위한 함수
  const [checkList, setCheckList] = useState([]);
  const checkAll = (e) => {
    if (e.target.checked) {
      return setCheckList(["firstTerm", "secondTerm", "thirdTerm"]);
    } else {
      return setCheckList([]);
    }
  };

  // 기존 사진 삭제 함수
  const deleteExistingPhotoHandler = () => {
    setExPhoto(null);
  };

  // 새로 업로드한 사진 삭제 함수
  const deletePhotoHandler = () => {
    setInputValue({ ...inputValue, img: null });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Layout>
        <div>카테고리</div>
        <div>기본정보</div>
        <PostList id="post-product" onSubmit={submitInputHandler}>
          <InputList name="상품이미지" important>
            <StPhotoInputWrapper>
              <StPhotoInputBox>
                이미지 등록
                <StPhotoInput
                  type="file"
                  name="img"
                  accept="image/jpeg"
                  onChange={fileInputHandler}
                  multiple=""
                />
              </StPhotoInputBox>
              {inputValue.img ? (
                <StPhotoPreview url={`${previewUrl}`}>
                  <button type="button" onClick={deletePhotoHandler}>
                    삭제
                  </button>
                </StPhotoPreview>
              ) : (
                <StPhotoPreview
                  url={`https://gykimagebucket.s3.ap-northeast-2.amazonaws.com/uploaded-image/${exPhoto}`}
                >
                  {exPhoto ? (
                    <button type="button" onClick={deleteExistingPhotoHandler}>
                      삭제
                    </button>
                  ) : null}
                </StPhotoPreview>
              )}
            </StPhotoInputWrapper>
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
            <Column>
              <div>
                <PostTextInput
                  type="text"
                  name="title"
                  value={inputValue.title}
                  placeholder="상품 제목을 입력해주세요."
                  onChange={onChangeHandler}
                  required
                  maxLength="40"
                  basic
                />{" "}
                <span>{inputValue.title?.length}/40</span>
              </div>
              <div>
                {inputValue.title && inputValue.title.length < 2 ? (
                  <span style={{ color: "orange" }}>
                    상품명을 2자 이상 입력해주세요.
                  </span>
                ) : null}
              </div>
            </Column>
          </InputList>
          <InputList name="카테고리" important>
            <Column>
              {" "}
              <CateButtonWrapper
                name="cateCode"
                value={inputValue.cateCode}
                required
              >
                <CateButtonBox>
                  <CateButton type="button" value="1" onClick={onSelectHandler}>
                    여성의류
                  </CateButton>
                </CateButtonBox>
                <CateButtonBox>
                  <CateButton type="button" value="2" onClick={onSelectHandler}>
                    남성의류
                  </CateButton>
                </CateButtonBox>
                <CateButtonBox>
                  <CateButton type="button" value="3" onClick={onSelectHandler}>
                    신발
                  </CateButton>
                </CateButtonBox>
                <CateButtonBox>
                  <CateButton type="button" value="4" onClick={onSelectHandler}>
                    가방
                  </CateButton>
                </CateButtonBox>
                <CateButtonBox>
                  <CateButton type="button" value="5" onClick={onSelectHandler}>
                    시계/주얼리
                  </CateButton>
                </CateButtonBox>
                <CateButtonBox>
                  <CateButton type="button" value="6" onClick={onSelectHandler}>
                    패션액세서리
                  </CateButton>
                </CateButtonBox>
                <CateButtonBox>
                  <CateButton type="button" value="7" onClick={onSelectHandler}>
                    디지털/가전
                  </CateButton>
                </CateButtonBox>
                <CateButtonBox>
                  <CateButton type="button" value="8" onClick={onSelectHandler}>
                    스포츠/레저
                  </CateButton>
                </CateButtonBox>
              </CateButtonWrapper>
              <p>선택한 카테고리 :{category(Number(inputValue.cateCode))}</p>
            </Column>
          </InputList>
          <InputList name="상태" required important>
            <label>
              <input
                type="radio"
                name="used"
                value="true"
                onChange={onChangeHandler}
              />
              중고상품
            </label>
            <label>
              <input
                type="radio"
                name="used"
                value="false"
                onChange={onChangeHandler}
              />
              새상품
            </label>
          </InputList>
          <InputList name="교환" required value={inputValue.exchange} important>
            <label>
              <input
                type="radio"
                name="exchange"
                value="false"
                onChange={onChangeHandler}
              />
              교환불가
            </label>
            <label>
              <input
                type="radio"
                name="exchange"
                value="true"
                onChange={onChangeHandler}
              />
              교환가능
            </label>
          </InputList>

          <InputList name="가격" important>
            <label>
              <PostTextInput
                type="text"
                name="price"
                placeholder="숫자만 입력해주세요."
                value={inputValue.price}
                onChange={changeNumberHandler}
                maxLength="11"
                basic
              />
              원
            </label>
            <label>
              <input
                type="checkbox"
                name="deliveryFee"
                onChange={(e) => onCheckHandler(e)}
                value={inputValue.deliveryFee}
              />
              배송비포함
            </label>
          </InputList>
          <InputList name="설명" important>
            <Column>
              <Column>
                <StDescInput
                  name="desc"
                  placeholder="여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등
              구매자에게 필요한 정보를 꼭 포함해 주세요. (10자 이상) 안전하고
              건전한 거래 환경을 위해 과학기술정보통신부, 한국인터넷진흥원과
              번개장터(주)가 함께 합니다."
                  cols="40"
                  rows="8"
                  value={inputValue.desc}
                  onChange={onChangeHandler}
                  maxLength="2000"
                ></StDescInput>
                {1 < inputValue.desc.length < 10 ? (
                  <span style={{ color: "orange" }}>
                    상품 설명을 10글자 이상 입력해주세요
                  </span>
                ) : null}
              </Column>
              <Row>
                <span>혹시 카카오톡ID를 적으셨나요?</span>
                <span>{inputValue.desc.length}/2000</span>
              </Row>
            </Column>
          </InputList>
          <InputList name="수량">
            <label>
              <PostTextInput
                type="text"
                name="quantity"
                value={inputValue.quantity}
                onChange={onChangeHandler}
              />
              개
            </label>
          </InputList>
          <div>빠른판매</div>
          <InputList name="옵션">
            <Column>
              <label>
                <input
                  type="checkbox"
                  name="thunderPay"
                  onChange={(e) => {
                    checkAll(e);
                    onCheckHandler(e);
                  }}
                  checked={checkList.length === 3 ? true : false}
                />
                안전결제 환영
              </label>
              <label>
                <input
                  type="checkbox"
                  name="firstTerm"
                  checked={checkList.includes("firstTerm") ? true : false}
                  readOnly
                />
                안전결제(번개페이) 요청을 거절하지 않는 대신 혜택을 받을 수
                있어요.
              </label>
              <label>
                <input
                  type="checkbox"
                  name="secondTerm"
                  checked={checkList.includes("secondTerm") ? true : false}
                  readOnly
                />
                내 상품을 먼저 보여주는 전용 필터로 더 빠르게 판매할 수 있어요.
              </label>
              <label>
                <input
                  type="checkbox"
                  name="thirdTerm"
                  checked={checkList.includes("thirdTerm") ? true : false}
                  readOnly
                />
                번개페이 배지로 더 많은 관심을 받을 수 있어요.
              </label>
            </Column>
          </InputList>
        </PostList>
        <FloaingFooter submitInputHandler={submitInputHandler} />
      </Layout>
    </Wrapper>
  );
}

export default Edit;
