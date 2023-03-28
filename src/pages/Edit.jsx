import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import Layout from "../components/Layout";
import InputList from "../features/post/InputList";
import styled from "styled-components";
import { Column, Row } from "../components/Flex";
import FloaingFooter from "../features/post/FloaingFooter";
import { useInput } from "../hooks/useInput";
import { __getDetail, __editDetail } from "../redux/modules/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import imageCompression from "browser-image-compression";
import { cookies } from "../shared/cookies";
import { useNavigate, useParams } from "react-router";

function Edit() {
  const dispatch = useDispatch();

  const params = useParams();
  const pdId = params.pdId;
  console.log("pdId", pdId);

  useEffect(() => {
    dispatch(__getDetail(+pdId));

    return () => {};
  }, [pdId]);
  const { posts } = useSelector((state) => state.detail);

  console.log("posts", posts);

  const jsonPost = JSON.stringify(posts);
  const newItem = {
    img: null,
    title: posts?.title,
    cateCode: posts?.cateCode,
    used: posts?.used,
    exchange: posts?.exchange,
    price: posts?.price.toLocaleString(),
    deliveryFee: posts?.deliveryFee,
    desc: posts?.desc,
    isDone: posts?.isDone,
    quantity: posts?.quantity,
    thunderPay: posts?.thunderPay,
  };

  const token = cookies.get("token");
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(newItem);

  //이미지 업로드시 화면 재렌더링을 위한 useEffect
  useEffect(() => {
    if (!token) {
      alert("로그인이 필요합니다!");
      navigate("/");
    }
    dispatch(__getDetail(pdId));
    preview();

    return () => {};
  }, [inputValue?.img, jsonPost]);

  // 일반 텍스트 onChange 함수
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // comma 찍힌 숫자로 변경하는 함수
  const changeNumberHandler = (e) => {
    const { name, value } = e.target;
    if (isNaN(Number(value?.replaceAll(",", "")))) {
      alert("숫자만 입력해주세요!");
    }
    const removedCommaValue = Number(value?.replaceAll(",", ""));
    setInputValue({
      ...inputValue,
      [name]: removedCommaValue.toLocaleString(),
    });
  };

  // 라디오 값 변경 함수
  const onCheckHandler = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value == "true" ? "false" : "true",
    });
  };

  const reader = new FileReader();

  // 이미지 파일 업로드 함수
  const fileInputHandler = async (e) => {
    const { name } = e.target;
    const imgData = e.target.files[0];

    const compressImgHandler = (fileSrc) => {
      const options = {
        maxSizeMB: 5,
        maxWidthOrHeight: 640,
        useWebWorker: true,
      };
      try {
        const compressedFile = imageCompression(fileSrc, options);
        return compressedFile;
      } catch (error) {
        alert("이미지 파일이 너무 큽니다!");
      }
    };

    const compressedImg = await compressImgHandler(imgData);
    // const readImg = reader.readAsDataURL(compressedImg);
    console.log("compressedImg", compressedImg);
    console.log("imgData", imgData);
    // console.log(("readImg", readImg));

    setInputValue({ ...inputValue, [name]: imgData });
  };

  // 업로드한 이미지 미리보기
  const preview = () => {
    const uploadedImg = inputValue.img;
    if (!uploadedImg) {
      return false;
    }
    const previewBox = document.querySelector(".image-preview");
    reader.onload = () => {
      //preview 백그라운ㅇ드 이미지 바꿔주기
      previewBox.style.backgroundImage = `url(${reader.result})`;
    };

    reader.readAsDataURL(uploadedImg);
  };

  // 글 수정 함수
  const submitInputHandler = async (e) => {
    e.preventDefault();

    const submitFile = {
      title: inputValue?.title,
      cateCode: inputValue?.cateCode,
      used: inputValue?.used,
      exchange: inputValue?.exchange,
      // comma 찍힌 String 값이기 때문에 Number형태로 변경하여 보내주어야 한다.
      price: Number(inputValue.price?.replaceAll(",", "")),
      deliveryFee: inputValue?.deliveryFee,
      desc: inputValue?.desc,
      quantity: Number(inputValue?.quantity),
      thunderPay: inputValue?.thunderPay,
    };
    // File이 아닌 데이터들을 json 형태로 변환하여 보내주기 위함
    const dto = new Blob([JSON.stringify(submitFile)], {
      type: "application/json",
    });
    // const submitImage = new Blob(inputValue.img, {
    //   type: "image/jpeg",
    // });

    const jsonItem = JSON.stringify(submitFile);

    const formData = new FormData();
    formData.append("image", inputValue.img);
    formData.append("dto", dto);

    console.log("key : image", formData.get("image"));
    console.log("key : dto", formData.get("dto"));

    await dispatch(__editDetail({ formData: formData, pdId: pdId }));
    navigate(`/products/${pdId}`);
  };

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

  // 번개페이 한꺼번에 체크하기 위한 함수
  const [checkList, setCheckList] = useState([]);
  const checkAll = (e) => {
    if (e.target.checked) {
      return setCheckList(["firstTerm", "secondTerm", "thirdTerm"]);
    } else {
      return setCheckList([]);
    }
  };

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

              <StPhotoPreview className="image-preview"></StPhotoPreview>
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
                <input
                  type="text"
                  name="title"
                  value={inputValue.title}
                  placeholder="상품 제목을 입력해주세요."
                  onChange={onChangeHandler}
                  required
                  maxLength="40"
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
              <select
                name="cateCode"
                value={inputValue.cateCode}
                onChange={onChangeHandler}
                required
              >
                <option value="1">여성의류</option>
                <option value="2">남성의류</option>
                <option value="3">신발</option>
                <option value="4">가방</option>
                <option value="5">시계/주얼리</option>
                <option value="6">패션액세서리</option>
                <option value="7">디지털/가전</option>
                <option value="8">스포츠/레저</option>
              </select>
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
            <label htmlFor="">
              <input
                type="text"
                name="price"
                placeholder="숫자만 입력해주세요."
                value={inputValue.price}
                onChange={changeNumberHandler}
                maxLength="11"
              />
              원
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="deliveryFee"
                onChange={(e) => onCheckHandler(e)}
                value={inputValue.deliveryFee}
                // checked={inputValue.deliveryFee == "true"}
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
                  name="thunderPay"
                  onChange={(e) => {
                    checkAll(e);
                    onCheckHandler(e);
                  }}
                  checked={checkList.length === 3 ? true : false}
                />
                안전결제 환영
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="firstTerm"
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
                  checked={checkList.includes("secondTerm") ? true : false}
                  readOnly
                />
                내 상품을 먼저 보여주는 전용 필터로 더 빠르게 판매할 수 있어요.
              </label>
              <label htmlFor="">
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

const PostList = styled.form`
  display: block;
  width: 1024px;
  margin: auto;
`;

const StPhotoInputWrapper = styled.ul`
  display: flex;
  width: 856px;
  flex-wrap: wrap;
  overflow-x: hidden;
`;

const StPhotoInputBox = styled.li`
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

const StPhotoPreview = styled.div`
  width: 202px;
  height: 202px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StPhotoInputGuide = styled.div`
  margin-top: 1.5rem;
  color: rgb(74, 164, 255);
  line-height: 1.5;
  font-size: 14px;
`;

const StDescInput = styled.textarea`
  width: 100%;
  height: 250px;
  border: 1px solid lightgray;
  line-height: 1.35;
  resize: none;
  padding: 1rem;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  background-color: field;
  /* &:active {
    border: 1px solid gray;
  }

  &:hover {
    border: 1px solid gray;
  } */
`;

export default Edit;
