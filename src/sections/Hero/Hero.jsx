import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Hero.css";

import hero1 from "../../sections/images/hero1.jpg";
import hero2 from "../../sections/images/hero2.jpg";
import hero3 from "../../sections/images/hero3.jpg";

const slides = [
  {
    image: hero1,
    className: "hero1",
    title1: "Luxury Lighting",
    title2: "Collection",
    desc: "Transform your space with elegant chandeliers, illuminated decor, and premium lighting solutions."
  },
  {
    image: hero2,
    className: "hero2",
    title1: "Modern",
    title2: "Lighting",
    desc: "Premium luxury lighting for modern homes."
  },
  {
    image: hero3,
    className: "hero3",
    title1: "Elegant",
    title2: "Design",
    desc: "Create your dream interior with luxury chandeliers."
  }
];

export default function Hero() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="heroSwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className={`hero ${slide.className}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>

            <div className="heroContent">
              <h1>{slide.title1}</h1>

              <h2>{slide.title2}</h2>

              <div className="line"></div>

              <p>{slide.desc}</p>

              <div className="buttons">
                <button className="goldBtn">
                  Explore Collection
                </button>

                <button className="whiteBtn">
                  View Catalog
                </button>
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}