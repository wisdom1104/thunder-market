import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MiniBox from "../components/MiniBox";

function Header() {
  const navigate = useNavigate();

  return (
    <StHeaderWrapper>
      <StHeaderMain>
        <StHeaderTitle>
          <StLogoBox
            onClick={() => {
              navigate("/");
            }}
          >
            <MainLogo
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAxMzYgNDAiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBmaWxsPSIjRDgwQzE4Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTIxLjc1MSAxNC44TDUuOTY3IDMxLjc1NmMtLjEwMi4xMS0uMjg2LjAyNS0uMjY3LS4xMjVsMS43Ni0xNC4zNjNILjE1NmMtLjEzNiAwLS4yMDctLjE2Mi0uMTE0LS4yNjJMMTUuODI2LjA1Yy4xMDMtLjExLjI4Ni0uMDI1LjI2OC4xMjVsLTEuNzYgMTQuMzYzaDcuMzAzYy4xMzYgMCAuMjA3LjE2Mi4xMTQuMjYyTTc5LjQgMi41NTVWMjkuNjVoLTQuMDNWMTYuMTMyaC0yLjZ2MTMuMDA0SDY4LjhWMi43MDVoMy45NzF2OS4zMjRoMi42VjIuNTU1aDQuMDN6TTk0LjcgMTguNDU4Yy43NTcgMCAxLjQ5My4wMDUgMi4yMS4wMTUuNzE0LjAxMiAxLjM0NC4wMzYgMS44OS4wNzUgMi4yNTcuMTM4IDQuMDA3LjY1IDUuMjQ2IDEuNTMzIDEuMjQuODgyIDEuODYgMi4yMDcgMS44NiAzLjk3M3MtLjYyIDMuMDg2LTEuODYgMy45NmMtMS4yNC44NzItMi45OSAxLjM4OC01LjI0NyAxLjU0OC0uNTI1LjAzOS0xLjE0NS4wNjMtMS44Ni4wNzMtLjcxNy4wMS0xLjQ1OC4wMTQtMi4yMjMuMDE0LS43NjcgMC0xLjUwOC0uMDA1LTIuMjI0LS4wMTQtLjcxNS0uMDEtMS4zMzUtLjAzNC0xLjg2LS4wNzMtMi4yNTgtLjE2LTQuMDA3LS42NzYtNS4yNDgtMS41NDgtMS4yNC0uODc0LTEuODYtMi4xOTQtMS44Ni0zLjk2cy42Mi0zLjA4NCAxLjg2LTMuOTU4YzEuMjQxLS44NzIgMi45OS0xLjM4OCA1LjI0OC0xLjU0OC41MjUtLjAyIDEuMTQ1LS4wMzkgMS44Ni0uMDYuNzE2LS4wMiAxLjQ1Mi0uMDMgMi4yMDgtLjAzek0xMzMgMi41NTVWMjkuNjVoLTQuMTIzVjE2LjM0M2gtNC4xMjN2LTMuOTIxaDQuMTIzVjIuNTU1SDEzM3ptLTk4LjE1NSAxNy42N3Y1LjE4NWgxNi44NzN2My42NUgzMC41MTN2LTguODM1aDQuMzMyem0zMi4xODctMTcuMDhjLS4yNDQgMi43MjgtLjY1NiA1LjI2OC0xLjIzNyA3LjYxOS0uNTggMi4zNS0xLjI2NyA0LjU0NS0yLjA2MSA2LjU4LS43OTUgMi4wMzktMS42NyAzLjkyNS0yLjYyNyA1LjY2Ny0uOTU4IDEuNzQtMS45MzQgMy4zNjMtMi45MzIgNC44NzFsLTMuNTEyLTIuMTdjLjk1Ni0xLjM2MSAxLjg1My0yLjgwMyAyLjY4OC00LjMxOS44MzQtMS41MTggMS41ODMtMy4wNzkgMi4yNDQtNC42OS42NjEtMS42MDcgMS4yMzItMy4yMzUgMS43MS00Ljg4NS40NzktMS42NDguODQtMy4yNzggMS4wODUtNC44ODZoLTYuOTYzVjMuMTQ0em01Ny4xNjEgMHYzLjczNGgtOS4zNDh2NS44NDFoOC42OTN2My42MTVoLTguNjkzdjcuMDc0bDEyLjI2NS0uNDh2My41NTNsLTE2LjQ5Mi44MTFWMy4xNDRoMTMuNTc1ek05NC43MTUgMjEuOTdjLS42ODYgMC0xLjM1Ni4wMS0yLjAxMi4wMjktLjY1NS4wMjItMS4yMzUuMDUtMS43NC4wOS0xLjAyNy4wOTktMS43NjguMzE3LTIuMjIyLjY1Ni0uNDU0LjMzNi0uNjguNzczLS42OCAxLjMwOCAwIC41MzguMjI2Ljk3My42OCAxLjMxLjQ1NC4zMzcgMS4xOTUuNTU1IDIuMjIyLjY1NC41MDUuMDQxIDEuMDg1LjA3IDEuNzQuMDkuNjU2LjAyIDEuMzI2LjAyOSAyLjAxMi4wMjkuNjg1IDAgMS4zNTUtLjAxIDIuMDExLS4wMjkuNjU1LS4wMiAxLjIzNC0uMDQ5IDEuNzM5LS4wOSAxLjAyOS0uMSAxLjc3LS4zMTcgMi4yMjQtLjY1NC40NTMtLjMzNy42OC0uNzcyLjY4LTEuMzEgMC0uNTM1LS4yMjctLjk3Mi0uNjgtMS4zMDgtLjQ1NC0uMzQtMS4xOTUtLjU1Ny0yLjIyNC0uNjU3LS41MDUtLjAzOC0xLjA4NC0uMDY3LTEuNzM5LS4wOS0uNjU2LS4wMTktMS4zMjYtLjAyOC0yLjAxMS0uMDI4ek01MS43MTggMi41NTV2MTkuNDM3aC00LjI1OXYtOS41OThoLTMuOTU4djUuODEzSDI4Ljc0NlYyLjg1Nmg0LjI1OXY0LjE1aDYuMjM4di00LjE1SDQzLjV2NS42MDNoMy45NThWMi41NTVoNC4yNTl6bTQ2LjYzNC41OXYzLjcyaC00Ljk0NGMtLjM2Ni42ODMtLjc3MyAxLjM4My0xLjIzMSAyLjEwNS0uMDc0LjExOC0uMTYuMjM0LS4yMzUuMzVsNy40ODUgNC44OTgtMi4zNTggMy4yNjItNy4yMzItNS4yMDVjLS4wMzcuMDQ4LS4wNy4wOTYtLjEwNy4xNDMtLjg5NSAxLjEzNy0xLjg0IDIuMjMyLTIuODM0IDMuMjgtLjk5NSAxLjA0Ny0xLjk4IDEuOTY2LTIuOTUzIDIuNzZsLTIuNzc1LTIuODA3Yy43NzYtLjYxMSAxLjU1MS0xLjMwNiAyLjMyNy0yLjA5Ljc3Ni0uNzgyIDEuNTI2LTEuNjA3IDIuMjUyLTIuNDcuNzI2LS44NjQgMS40MDItMS43NTggMi4wMy0yLjY4NC4zNDgtLjUxNi42NjUtMS4wMy45Ni0xLjU0Mkg4Mi42di0zLjcyaDE1Ljc1MnptNi40MTgtLjU5VjguMWgyLjkwM3YzLjk2aC0yLjkwM3Y2LjRoLTQuMTY1VjIuNTU0aDQuMTY1em0tNjUuNTI3IDguMDIzaC02LjIzOHYzLjk5N2g2LjIzOHYtMy45OTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNC4wMDAwMDApIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
              width="136"
              height="40"
              alt="번개장터 로고"
              onClick={() => {
                navigate("/");
              }}
            />
          </StLogoBox>
          <StSearchBar>
            <StSearchInputBox>
              <StSearchInput
                type="text"
                placeholder="상품명, 지역명, @상점명 입력"
              />
              <StSearchIcon>
                <img
                  src="https://m.bunjang.co.kr/pc-static/resource/2be3c66fa47ccd5ece2a.png"
                  width="16"
                  height="16"
                  alt="검색 버튼 아이콘"
                />
              </StSearchIcon>
            </StSearchInputBox>
          </StSearchBar>
          <StMemeberBar>
            <StMemberButton>
              <Img
                src="https://m.bunjang.co.kr/pc-static/resource/32554a59cf002b3def10.png"
                width="23"
                height="24"
                alt="번개톡버튼 이미지"
              />
              번개톡
            </StMemberButton>
            <StMemberPage>
              <Img
                src="https://m.bunjang.co.kr/pc-static/resource/31370b164bc5b7cc4fef.png"
                width="23"
                height="24"
                alt="내상점버튼 이미지"
              />
              내상점
            </StMemberPage>
            <StMemberPage href="/products/new">
              <Img
                src="https://m.bunjang.co.kr/pc-static/resource/bcc7abb5d531bcf26033.png"
                width="23"
                height="26"
                alt="판매하기버튼 이미지"
              />
              판매하기
            </StMemberPage>
          </StMemeberBar>
        </StHeaderTitle>
        <Categories>
          <CategoriesImg
            src="https://m.bunjang.co.kr/pc-static/resource/2519843d5dad3dc4d3b9.png"
            width="20"
            height="16"
            alt="메뉴 버튼 아이콘"
          />
          <SellerCenterBox>
            <SellerCentertext
              style={{
                fontWeight: "bolder",
                marginRight: "4px",
                cursor: "pointer",
              }}
            >
              번개장터 판매자센터
            </SellerCentertext>
            <img
              src="https://m.bunjang.co.kr/pc-static/resource/34a01cb11e0b14957f81.png"
              width="72"
              height="26"
              alt="판매자센터"
            ></img>
          </SellerCenterBox>
        </Categories>
      </StHeaderMain>
      <MiniBox />
    </StHeaderWrapper>
  );
}

const MainLogo = styled.img`
  cursor: pointer;
`;

const SellerCenterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SellerCentertext = styled.b`
  display: flex;
  -webkit-box-align: baseline;
  align-items: baseline;
  margin-left: 10px;
  line-height: 1.5;
  height: 21px;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  font-size: 15px;
`;

const CategoriesImg = styled.img`
  margin-right: 20px;
  filter: invert(0%) sepia(58%) saturate(3447%) hue-rotate(63deg)
    brightness(80%) contrast(100%);
  &:hover {
    filter: none;
  }
`;

const StHeaderWrapper = styled.div`
  position: sticky;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 35px;
  background: rgb(255, 255, 255);
  z-index: 10;
  border-bottom: 1px solid rgb(238, 238, 238);
  top: 0px;
  left: 0px;
`;

const StHeaderMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const StHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
  height: 40px;
`;

const StLogoBox = styled.a`
  margin-right: 100px;
  width: 136px;
  display: flex;
  align-items: center;
`;

const StSearchBar = styled.div`
  border: 2px solid rgb(247, 47, 51);
  width: 460px;
  height: 40px;
  box-sizing: border-box;
  position: relative;
`;

const StSearchInputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 15px;
`;

const StSearchInput = styled.input`
  color: rgb(102, 102, 102);
  flex-grow: 0.9;
  border: 1px solid transparent;
  outline: none;
`;

const StSearchIcon = styled.a`
  color: rgb(33, 33, 33);
  text-decoration: none;
  cursor: pointer;
`;

const StMemeberBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex-grow: 1;
`;

const StMemberButton = styled.a`
  margin-left: 30px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
`;

const StMemberPage = styled.a`
  margin-left: 30px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: inherit;
  ::after {
    content: "";
    width: 1px;
    height: 10px;
    border-right: 1px solid rgb(204, 204, 204);
    position: absolute;
    top: 8px;
    right: -15px;
  }
`;

const Img = styled.img`
  margin-right: 5px;
`;

const Categories = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 70px;
  color: rgb(33, 33, 33);
`;

export default Header;
