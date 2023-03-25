import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
// import required modules
import { Autoplay, Navigation } from "swiper";

function PhotoSlide() {
  const items = [
    { src: " https://media.bunjang.co.kr/images/nocrop/966189368_w3087.jpg" },
    { src: " https://media.bunjang.co.kr/images/nocrop/967348941_w3087.jpg" },
    { src: " https://media.bunjang.co.kr/images/nocrop/966186753_w3087.jpg" },
    { src: " https://media.bunjang.co.kr/images/nocrop/967651203_w3087.jpg" },
    { src: " https://media.bunjang.co.kr/images/nocrop/926900341_w2058.jpg" },
    { src: " https://media.bunjang.co.kr/images/nocrop/959481277_w3087.jpg" },
    { src: " https://media.bunjang.co.kr/images/nocrop/959246584_w2058.jpg" },
    { src: " https://media.bunjang.co.kr/images/nocrop/969614250_w2058.jpg" },
    { src: " https://media.bunjang.co.kr/images/nocrop/969455586_w3087.jpg" },
    { src: " https://media.bunjang.co.kr/images/nocrop/966626074_w3087.jpg" },
  ];
  return (
    <>
      <PhotoSlideBox>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {items.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img src={item.src} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </PhotoSlideBox>
    </>
  );
}

export default PhotoSlide;

const PhotoSlideBox = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
`;
