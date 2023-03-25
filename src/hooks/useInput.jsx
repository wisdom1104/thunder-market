import { useState } from "react";
import { useDispatch } from "react-redux";
import imageCompression from "browser-image-compression";

export const useInput = (initialValue, action) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(initialValue);

  const onChangeHandler = (e) => {
    const { name, value, checked } = e.target;
    if (name == "price") {
      const removedCommaValue = Number(value.replaceAll(",", ""));
      if (isNaN(removedCommaValue)) {
        alert("숫자만 입력해주세요!");
      }
      if (Number(value) > 9) {
        alert("9자리 숫자까지만 입력이 가능합니다!");
      }

      setInputValue({
        ...inputValue,
        price: removedCommaValue.toLocaleString(),
      });
    } else if (name == "thunderPay" || "deliveryFee") {
      setInputValue({ ...inputValue, [name]: checked ? true : false });
    } else if (name == "used" || "exchange") {
      // console.log("name", name);
      // console.log("value", value);
      setInputValue({
        ...inputValue,
        [name]: value == "false" ? true : false,
      });
    } else {
      setInputValue({ ...inputValue, [name]: value });
    }
  };

  // const changeRadioHandler = (e) => {
  //   const isUsed = e.currentTarget.value == "true" ? true : false;
  // };

  // const onCheckHandler = (e) => {
  //   const { name, checked } = e.target;

  //   setInputValue({ ...inputValue, [name]: checked ? true : false });
  // };

  const compressImgHandler = (fileSrc) => {
    const options = {
      maxSizeMB: 10,
      maxWidthOrHeight: 640,
      useWebWorker: true,
    };
    try {
      const compressedFile = imageCompression(fileSrc, options);
      console.log("이미지 압축 됐어요!");
      return compressedFile;
    } catch (error) {
      alert("이미지 파일이 너무 큽니다!");
    }
  };

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
    formData.append("price", inputValue.price);
    formData.append("exchange", initialValue.exchage);
    formData.append("deliveryFee", inputValue.deliveryFee);
    // formData.append("isDone", false);
    formData.append("quantity", inputValue.quantity);
    formData.append("thunderPay", initialValue.thunderPay);
    dispatch(action({ formData, inputValue }));
  };

  return [
    inputValue,
    onChangeHandler,
    // fileInputHandler,
    submitInputHandler,
  ];
};
