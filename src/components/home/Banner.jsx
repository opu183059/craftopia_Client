import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-11/12"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center p-10">
            <div className="w-6/12">
              <img
                className="w-auto"
                src="https://i.ibb.co/GVKwXgL/Colorful-Cute-Butterfly-and-Paint-Brush-Illustration-Local-Artist-Community-Logo-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="w-6/12 text-left p-20">
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
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-6/12">
              <img
                className="w-auto rounded-lg p-20"
                src="https://i.ibb.co/m5cF5DW/handmade-art-and-craft.jpg"
                alt=""
              />
            </div>
            <div className="w-6/12 text-left p-20">
              <p>
                "Discover the joy of art and craft at our school. Immerse
                yourself in a vibrant community of artists, where creativity
                knows no bounds. From painting to pottery, photography to
                fashion design, we offer a diverse range of courses to ignite
                your passion. Unleash your artistic expression and watch your
                talents bloom under the guidance of experienced instructors.
                Join us on this artistic adventure and let your imagination
                soar."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-6/12">
              <img
                className="w-auto rounded-lg p-20"
                src="https://i.ibb.co/37jTmJ9/crafts-for-kids.jpg"
                alt=""
              />
            </div>
            <div className="w-6/12 text-left p-20">
              <p>
                "Step into a world of imagination and artistic discovery at our
                Art & Craft School. Here, we celebrate the power of creativity
                and provide a nurturing space for artists of all levels to
                thrive. Unleash your inner visionary as you delve into various
                artistic disciplines, guided by our passionate instructors. From
                brush to chisel, needle to camera, our school is a haven where
                inspiration finds its canvas. Join our vibrant community,
                embrace your artistic journey, and let your passion illuminate
                the world with beauty and expression."
              </p>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress w-6" slot="container-end">
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
