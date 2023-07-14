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
          delay: 500000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-auto h-screen md:h-[550px]"
      >
        <SwiperSlide>
          <div className="min-h-screen bg-[url('https://4kwallpapers.com/images/walls/thumbs_2t/4724.jpg')] bg-cover">
            <div className="text-white w-full h-screen md:h-[550px] bg-black/60 md:flex items-center justify-center gap-8">
              <div className="flex justify-center pt-9 md:pt-0">
                <img
                  src="https://www.happinessishomemade.net/wp-content/uploads/2022/09/rocket-craft-preschool-image.jpg-500x500.webp"
                  alt=""
                  className="md:w-80 w-60 md:h-80 h-60 rounded-xl border-4 border-blue-200 shadow-xl"
                />
              </div>
              <div className="md:w-5/12 md:text-left text-center mt-5 md:mt-0">
                <h1 className="text-5xl font-akaya text-blue-400">Craftopia</h1>
                <p className="mt-2">
                  "Welcome to our Art & Craft School! We're dedicated to
                  fostering creativity and nurturing artistic talent. Join us to
                  explore various mediums, unleash your imagination, and embark
                  on a journey of self-expression. Unleash your artistic
                  potential with us!"
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-screen bg-[url('https://img.freepik.com/free-psd/paper-craft-leaf-background-psd-green-tone_53876-141388.jpg?w=2000')] bg-cover">
            <div className="text-white w-full h-screen md:h-[550px] bg-black/60 md:flex flex-row-reverse items-center justify-center gap-8">
              <div className="flex justify-center pt-9 md:pt-0">
                <img
                  src="https://artsymomma.com/wp-content/uploads/2016/03/Rosette-Birds-Paper-Craft.jpg"
                  alt=""
                  className="md:w-80 w-60 md:h-80 h-60 rounded-xl border-4 border-blue-200 shadow-xl"
                />
              </div>
              <div className="md:w-5/12 md:text-right text-center mt-5 md:mt-0">
                <h1 className="text-5xl font-akaya text-blue-400">Craftopia</h1>
                <p className="mt-2">
                  "Discover the joy of art and craft at our school. Immerse
                  yourself in a vibrant community of artists, where creativity
                  knows no bounds.Join our vibrant community, embrace your
                  artistic journey.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-screen bg-[url('https://thumbs.dreamstime.com/b/d-mural-wallpaper-abstract-gray-black-circles-purple-pink-flowers-silhouettes-dandelions-pattern-decorative-silver-163824508.jpg')] bg-cover">
            <div className="text-white w-full h-screen md:h-[550px] bg-black/60 md:flex items-center justify-center gap-8">
              <div className="flex justify-center pt-9 md:pt-0">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR0ydwFxcZxXcpBWVr21OHdT6o_-OmEHdeA&usqp=CAU"
                  alt=""
                  className="md:w-80 w-60 md:h-80 h-60 rounded-xl border-4 border-blue-200 shadow-xl"
                />
              </div>
              <div className="md:w-5/12 md:text-left text-center mt-5 md:mt-0">
                <h1 className="text-5xl font-akaya text-blue-400">Craftopia</h1>
                <p className="mt-2">
                  "Here, we celebrate the power of creativity and provide a
                  nurturing space for artists of all levels to thrive. Unleash
                  your inner visionary as you delve into various artistic
                  disciplines, guided by our passionate instructors. From brush
                  to chisel, needle to camera, our school is a haven where
                  inspiration finds its canvas."
                </p>
              </div>
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
