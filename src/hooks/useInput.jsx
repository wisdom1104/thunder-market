import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const useInput = (initialValue, action, id) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(initialValue);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name == "price" && isNaN(value)) {
      alert("숫자만 입력해주세요!");
    } else if (name == "price") {
      const removedCommaValue = Number(value.replaceAll(",", ""));
      setInputValue({
        ...inputValue,
        price: removedCommaValue.toLocaleString(),
      });
    } else {
      setInputValue({ ...inputValue, [name]: value });
    }
  };

  const onCheckHandler = (e) => {
    const { name, checked } = e.target;
    setInputValue({ ...inputValue, [name]: checked });
  };

  // formdata는 특수한 객체 형태로서 배열처럼 사용한다.
  const fileInputHandler = (e) => {
    setInputValue({ ...inputValue, img: e.target.files[0] });
  };

  const submitInputHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputValue.title);
    formData.append("desc", inputValue.desc);
    formData.append("cateCode", inputValue.cateCode);
    formData.append("img", inputValue.img);
    formData.append("used", inputValue.used);
    formData.append("price", inputValue.price);
    formData.append("exchange", initialValue.exchage);
    formData.append("deliveryFee", inputValue.deliveryFee);
    formData.append("isDone", inputValue.isDone);
    formData.append("quantity", inputValue.quantity);
    formData.append("thunderPay", initialValue.thunderPay);
    dispatch(action({ formData, inputValue }));
  };

  return [
    inputValue,
    onChangeHandler,
    fileInputHandler,
    submitInputHandler,
    onCheckHandler,
  ];
};
