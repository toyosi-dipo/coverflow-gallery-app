import styles from "@/styles/Home.module.css";
import { useState } from "react";
import imagePaths from "@/data/image-data";
import Image from "next/image";

// import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <main className={styles.main}>
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          className={styles.all_imgs_container}
        >
          {imagePaths.map((imagePath, index) => {
            return (
              <SwiperSlide key={index} className={styles.single_img_container}>
                <Image height={320} width={480} src={imagePath} />
              </SwiperSlide>
            );
          })}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </main>
    </>
  );
}
