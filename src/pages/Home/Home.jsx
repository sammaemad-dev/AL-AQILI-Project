import Hero from "../../sections/Hero/Hero";
import Features from "../../components/Features/Features";
import Categories from "../../sections/Categories/Categories";
import About from "../../pages/About/About";
import ProjectsGallery from "../../components/ProjectsGallery/ProjectsGallery";

function Home() {
  return (
    <>
      <Hero />
      <Features />
       <Categories />
      <About />
      <ProjectsGallery />
    </>
  );
}

export default Home;