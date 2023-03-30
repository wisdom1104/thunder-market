import React from "react";
import styled from "styled-components";

const PostTextInput = ({
  type,
  name,
  value,
  onChange,

  maxLength,
  required,
  placeholder,
  ...rest
}) => {
  return (
    <StInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default PostTextInput;

const StInput = styled.input`
  height: 25px;
  margin-right: 8px;
  outline: 1px gray;
  font-size: 15px;
  width: ${(props) => (props.basic ? "300px" : props.small ? "150px" : "80px")};
`;
