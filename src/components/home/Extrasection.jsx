// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";

// import required modules

import { useRef } from "react";

const Extrasection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="extrasection">
      <h1 className="font-akaya text-5xl text-center mb-5">Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/SyVgQYg/Quilled-flowers-sample-quilling-picture.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/t2C6HQJ/nature-crafts.jpg"
            className="flex items-center justify-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/ZVkr676/istockphoto-519362488-612x612.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/bRpLRDm/OIP-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/mqtvvDS/caterpillar-craft-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/9nyF3VR/handmade-art-and-craft.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/37jTmJ9/crafts-for-kids.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/khySb3z/R.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/85yJG50/OIP.jpg" />
        </SwiperSlide>
        <div className="autoplay-progress w-6 hidden" slot="w-11/12-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Extrasection;
