import styled from "styled-components";

export const PostList = styled.form`
  display: block;
  width: 1024px;
  margin: auto;
`;

export const StPhotoInputWrapper = styled.ul`
  display: flex;
  width: 856px;
  flex-wrap: wrap;
  overflow-x: hidden;
`;

export const StPhotoInputBox = styled.li`
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

export const StPhotoInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0;
  cursor: pointer;
  font-size: 0px;
`;

export const StPhotoPreview = styled.div`
  width: 202px;
  height: 202px;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ url }) => {
    return `background-image:url(${url})`;
  }}
`;

// export const StPhotoPreview = styled.div`
//   width: 202px;
//   height: 202px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   ${({ url }) => {
//     return `background-image:url(${url})`;
//   }}
// `;

export const StPhotoInputGuide = styled.div`
  margin-top: 1.5rem;
  color: rgb(74, 164, 255);
  line-height: 1.5;
  font-size: 14px;
`;

export const StDescInput = styled.textarea`
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

export const CateButtonWrapper = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0.5rem 0px;
  list-style: none;
  border: 1px solid lightgray;
`;

export const CateButtonBox = styled.li`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  border: 1px solid transparent;
`;

export const CateButton = styled.button`
  width: 100%;
  height: 100%;
  /* padding: 0px 1.5rem; */
  background-color: transparent;
  cursor: pointer;
  outline: none;
  appearance: button;
  border: 1px solid transparent;
  &:hover {
    background-color: lightgray;
  }
`;
