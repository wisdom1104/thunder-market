import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function DetailCard({ title, pdId, img }) {
  const navigate = useNavigate();
  return (
    <CardWrapper>
      <CardBox
        onClick={() => {
          navigate(`/products/${pdId}`);
        }}
      >
        <CardImgBox>
          <CardImg
            src={`https://gykimagebucket.s3.ap-northeast-2.amazonaws.com/uploaded-image/${img}`}
          />
          <CardImgTooltip></CardImgTooltip>
        </CardImgBox>
      </CardBox>
      <CardContent>{title}</CardContent>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 159px;
  margin-right: 14px;
  flex-shrink: 0;
`;

const CardBox = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const CardImgBox = styled.div`
  position: relative;
`;

const CardImg = styled.img`
  width: 155px;
  height: 155px;
  display: block;
`;

const CardImgTooltip = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const CardContent = styled.div`
  margin-top: 10px;
  width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  line-height: 1.4;
  font-size: 13px;
`;

export default DetailCard;
