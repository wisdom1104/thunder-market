import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { __deleteDetail } from "../../redux/modules/detailSlice";

function DeleteModal({ isDeleteModal, setIsDeleteModal, pdId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProductHandler = async () => {
    dispatch(
      await __deleteDetail({
        pdId,
      })
    );
    navigate("/");
    setIsDeleteModal(!isDeleteModal);
  };

  return (
    <>
      <div>
        {
          isDeleteModal == true ? (
            <ModalBackground
              onClick={() => {
                setIsDeleteModal(!isDeleteModal);
              }}
            >
              <Modal onClick={(e) => e.stopPropagation()}>
                <Content>상품을 삭제하시겠습니까?</Content>
                <BtnBox>
                  <OkBtn onClick={deleteProductHandler}>확인</OkBtn>
                  <CancelBtn
                    onClick={() => {
                      setIsDeleteModal(!isDeleteModal);
                    }}
                  >
                    취소
                  </CancelBtn>
                </BtnBox>
              </Modal>
            </ModalBackground>
          ) : null //기계역할
        }
      </div>
    </>
  );
}

export default DeleteModal;
const CancelBtn = styled.button`
  height: 3rem;
  text-align: center;
  font-size: 1rem;
  background-color: rgb(244, 244, 250);
  color: rgb(114, 112, 127);
  cursor: pointer;
  outline: none;
  border: none;
  flex: 110%;
`;
const OkBtn = styled.button`
  margin-left: 0.5rem;
  height: 3rem;
  text-align: center;
  font-size: 1rem;
  color: rgb(255, 255, 255);
  background: rgb(255, 80, 88);
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  flex: 110%;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
`;
const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
`;

const Content = styled.p`
  white-space: pre-wrap;
  word-break: keep-all;
  text-align: center;
  font-size: 15px;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

const Modal = styled.div`
  width: 18.5rem;
  background: rgb(255, 255, 255);
  padding: 1.5rem;
  border-radius: 2px;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
`;
