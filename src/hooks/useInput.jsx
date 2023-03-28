import { useState } from "react";
import { useDispatch } from "react-redux";
// import imageCompression from "browser-image-compression";

export const useInput = (initialValue, action) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(initialValue);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  // const compressImgHandler = (fileSrc) => {
  //   const options = {
  //     maxSizeMB: 10,
  //     maxWidthOrHeight: 640,
  //     useWebWorker: true,
  //   };
  //   try {
  //     const compressedFile = imageCompression(fileSrc, options);
  //     console.log("이미지 압축 됐어요!");
  //     return compressedFile;
  //   } catch (error) {
  //     alert("이미지 파일이 너무 큽니다!");
  //   }
  // };

  // formdata는 특수한 객체 형태로서 배열처럼 사용한다.
  // const fileInputHandler = (e) => {
  //   const imgData = e.target.files[0];
  //   const uploadedImgData = compressImgHandler(imgData);

  //   setInputValue({ ...inputValue, img: uploadedImgData });
  // };

  const submitInputHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputValue.title);
    formData.append("desc", inputValue.desc);
    formData.append("cateCode", inputValue.cateCode);
    // formData.append("img", inputValue.img);
    formData.append("used", inputValue.used);
    //숫자에 comma 포함되어있으므로 숫자로 변형해주어야 함
    formData.append("price", Number(inputValue.price));
    formData.append("exchange", initialValue.exchage);
    formData.append("deliveryFee", inputValue.deliveryFee);
    // formData.append("isDone", false);
    formData.append("quantity", inputValue.quantity);
    formData.append("thunderPay", initialValue.thunderPay);
    console.log("formData", formData);
    dispatch(action({ formData, inputValue }));
    // console.log("얍!!");
  };

  return [
    inputValue,
    onChangeHandler,
    // fileInputHandler,
    submitInputHandler,
  ];
};
