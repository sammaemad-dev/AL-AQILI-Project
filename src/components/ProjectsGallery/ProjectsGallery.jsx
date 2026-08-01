import "./ProjectsGallery.css";

import A1 from "../../assets/imagess/A1.jpg";
import A2 from "../../assets/imagess/A2.jpg";
import A3 from "../../assets/imagess/A3.jpg";
import A4 from "../../assets/imagess/A4.jpg";
import A5 from "../../assets/imagess/A5.jpg";
import A6 from "../../assets/imagess/A6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    image: A1,
    title: "Living Room",
  },
  {
    id: 2,
    image: A2,
    title: "Luxury Dining",
  },
  {
    id: 3,
    image: A3,
    title: "Modern Lobby",
  },
  {
    id: 4,
    image: A4,
    title: "Luxury Bedroom",
  },
  {
    id: 5,
    image: A5,
    title: "Elegant Bathroom",
  },
  {
    id: 6,
    image: A6,
    title: "Modern Interior",
  },
];

function ProjectsGallery() {
  return (
    <section className="projects">

      <div className="projects-header">

        <span>EL-QILI</span>

        <h2>
          Explore Our Luxury
          <span> Interiors</span>
        </h2>

        <p>
          Discover premium lighting concepts crafted to transform
          homes, villas, hotels and luxury spaces.
        </p>

      </div>

      <Swiper
        className="projects-swiper"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 220,
          modifier: 2,
          scale: 0.9,
          slideShadows: false,
        }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        navigation={true}

        pagination={{
          clickable: true,
        }}

        speed={1200}

        modules={[
          EffectCoverflow,
          Pagination,
          Navigation,
          Autoplay,
        ]}
      >

        {projects.map((project) => (

          <SwiperSlide
            key={project.id}
            style={{ width: "370px" }}
          >

            <div className="project-card">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-overlay">

                <button className="project-btn">
                  AL AQILI
                </button>

                <h3>{project.title}</h3>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default ProjectsGallery;