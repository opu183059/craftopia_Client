/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
const Review = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="review">
      <h1 className="text-center font-akaya text-4xl text-blue-600">Reviews</h1>
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
        className="mySwiper md:w-7/12 h-[500px]"
      >
        <SwiperSlide>
          <div className="flex h-full justify-center items-center">
            <div className="w-96 relative mx-auto bg-blue-100 dark:bg-blue-800 p-8 rounded-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Photo_portrait_PP.jpg/800px-Photo_portrait_PP.jpg"
                alt=""
                className="absolute z-50 -top-12 w-24 h-24 rounded-full border-2 shadow-xl"
              />
              <div className="absolute text-right right-8 -top-4 bg-blue-100 px-4 py-1 rounded-lg shadow-md dark:bg-blue-800">
                <h2 className="font-bold md:text-xl">Akther uz zaman</h2>
                <p className="md:text-sm text-xs">CEO tinyzoo</p>
              </div>
              <div className="details">
                <p className="mt-8 text-sm md:text-base">
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt maiores magnam facere dolor cupiditate eum distinctio
                  asperiores voluptates molestiae voluptate!"
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center">
            <div className="w-96 relative mx-auto bg-blue-100 dark:bg-blue-800 p-8 rounded-xl">
              <img
                src="https://s2.dmcdn.net/u/2UDzF1ZmTfcVG8PAP/200x200"
                alt=""
                className="absolute z-50 -top-12 w-24 h-24 rounded-full border-2 shadow-xl"
              />
              <div className="absolute text-right right-8 -top-4 bg-blue-100 px-4 py-1 rounded-lg shadow-md dark:bg-blue-800">
                <h2 className="font-bold text-xl">Sheikh Rashid</h2>
                <p className="text-sm">Businessman</p>
              </div>
              <div className="details">
                <p className="mt-8">
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt maiores magnam facere dolor cupiditate eum distinctio
                  asperiores voluptates molestiae voluptate!"
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center">
            <div className="w-96 relative mx-auto bg-blue-100 dark:bg-blue-800 p-8 rounded-xl">
              <img
                src="https://media.istockphoto.com/id/635978276/photo/im-happy-to-share-this-message.jpg?s=612x612&w=0&k=20&c=HwvMLR3EFk6iuZLco73JnFrGi748FouSWYT2zkSOihw="
                alt=""
                className="absolute z-50 -top-12 w-24 h-24 rounded-full border-2 shadow-xl"
              />
              <div className="absolute text-right right-8 -top-4 bg-blue-100 px-4 py-1 rounded-lg shadow-md dark:bg-blue-800">
                <h2 className="font-bold text-xl">Daviud Jacson</h2>
                <p className="text-sm">Developer tinyzoo</p>
              </div>
              <div className="details">
                <p className="mt-8">
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt maiores magnam facere dolor cupiditate eum distinctio
                  asperiores voluptates molestiae voluptate!"
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center">
            <div className="w-96 relative mx-auto bg-blue-100 dark:bg-blue-800 p-8 rounded-xl">
              <img
                src="https://s2.dmcdn.net/u/2UDzF1ZmTfcVG8PAP/200x200"
                alt=""
                className="absolute z-50 -top-12 w-24 h-24 rounded-full border-2 shadow-xl"
              />
              <div className="absolute text-right right-8 -top-4 bg-blue-100 px-4 py-1 rounded-lg shadow-md dark:bg-blue-800">
                <h2 className="font-bold text-xl">Sheikh Rashid</h2>
                <p className="text-sm">Businessman</p>
              </div>
              <div className="details">
                <p className="mt-8">
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt maiores magnam facere dolor cupiditate eum distinctio
                  asperiores voluptates molestiae voluptate!"
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

export default Review;
