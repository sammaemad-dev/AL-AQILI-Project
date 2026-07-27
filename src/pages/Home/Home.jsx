import Hero from "../../sections/Hero/Hero";
import Features from "../../components/Features/Features";
import Categories from "../../sections/Categories/Categories";
import About from "../../pages/About/About";

function Home() {
  return (
    <>
      <Hero />
      <Features />
       <Categories />
      <About />
    </>
  );
}

export default Home;