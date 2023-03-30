import { useState } from "react";
import { useDispatch } from "react-redux";
import imageCompression from "browser-image-compression";
import { useNavigate } from "react-router-dom";

export const useInput = (initialValue, action, id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(initialValue);

  // 일반 텍스트 onChange 함수
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // comma 찍힌 숫자로 변경하는 함수
  const changeNumberHandler = (e) => {
    const { name, value } = e.target;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    if (isNaN(Number(value.replaceAll(",", "")))) {
      alert("숫자만 입력해주세요!");
    }

    setInputValue({
      ...inputValue,
      [name]: removedCommaValue.toLocaleString(),
    });
  };

  // 체크박스 값 변경 함수
  const onCheckHandler = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value === "true" ? "false" : "true",
    });
  };

  // 카테고리 선택 함수
  const onSelectHandler = (e) => {
    const { value } = e.target;
    setInputValue({ ...inputValue, cateCode: value });
  };

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

    setInputValue({ ...inputValue, [name]: compressedImg });
  };

  const submitFile = {
    title: inputValue.title,
    cateCode: inputValue.cateCode,
    used: inputValue.used,
    exchange: inputValue.exchange,
    // comma 찍힌 String 값이기 때문에 Number형태로 변경하여 보내주어야 한다.
    price: Number(inputValue.price.replaceAll(",", "")),
    deliveryFee: inputValue.deliveryFee,
    desc: inputValue.desc,
    quantity: Number(inputValue.quantity),
    thunderPay: inputValue.thunderPay,
  };

  // 글 작성 함수
  const submitInputHandler = async (e) => {
    e.preventDefault();
    // File이 아닌 데이터들을 json 형태로 변환하여 보내주기 위함
    const dto = new Blob([JSON.stringify(submitFile)], {
      type: "application/json",
    });
    if (inputValue.img == null) {
      const formData = new FormData();
      const emptyImageBlob = new Blob([], { type: "image/jpeg" });
      formData.append("image", emptyImageBlob, "image");
      formData.append("dto", dto);
      await dispatch(action({ formData, pdId: id }));
      navigate("/");
    }

    const formData = new FormData();
    formData.append("image", inputValue.img, "image");
    formData.append("dto", dto);

    await dispatch(action({ formData, pdId: id }));
    navigate("/");
  };

  return {
    inputValue,
    onChangeHandler,
    fileInputHandler,
    submitInputHandler,
    changeNumberHandler,
    onCheckHandler,
    setInputValue,
    onSelectHandler,
  };
};
