/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-auto h-screen"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center -mt-14">
            <div className="w-full md:w-6/12">
              <img
                className="w-auto rounded-2xl p-5 md:p-20"
                src="https://i.ibb.co/GVKwXgL/Colorful-Cute-Butterfly-and-Paint-Brush-Illustration-Local-Artist-Community-Logo-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-6/12 text-center md:text-left p-5 md:p-20">
              <h1 className="font-akaya text-5xl mb-4">Craftopia</h1>
              <p>
                "Welcome to our Art & Craft School! We're dedicated to fostering
                creativity and nurturing artistic talent. Join us to explore
                various mediums, unleash your imagination, and embark on a
                journey of self-expression. Unleash your artistic potential with
                us!"
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="w-full md:w-6/12">
              <img
                className="w-auto rounded-2xl p-5 md:p-20"
                src="https://i.ibb.co/m5cF5DW/handmade-art-and-craft.jpg"
                alt=""
              />
            </div>
            <div className="w-full md:w-6/12 text-center md:text-left p-5 md:p-20">
              <h1 className="font-akaya text-5xl mb-4">Craftopia</h1>
              <p>
                "Discover the joy of art and craft at our school. Immerse
                yourself in a vibrant community of artists, where creativity
                knows no bounds.Join our vibrant community, embrace your
                artistic journey.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-6/12">
              <img
                className="w-auto rounded-lg p-5 md:p-20"
                src="https://i.ibb.co/37jTmJ9/crafts-for-kids.jpg"
                alt=""
              />
            </div>
            <div className="w-full md:w-6/12 text-center md:text-left p-5 md:p-20">
              <h1 className="font-akaya text-5xl mb-4">Craftopia</h1>
              <p>
                "Here, we celebrate the power of creativity and provide a
                nurturing space for artists of all levels to thrive. Unleash
                your inner visionary as you delve into various artistic
                disciplines, guided by our passionate instructors. From brush to
                chisel, needle to camera, our school is a haven where
                inspiration finds its canvas."
              </p>
            </div>
          </div>
        </SwiperSlide>

        <div className="hidden" slot="w-11/12-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
