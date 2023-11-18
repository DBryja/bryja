import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { staggerSlide, lenisScrollUpdate } from "./hooks_utils/animations";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Details from "./components/Details";
import MyProjects from "./components/MyProjects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProgressBar from "./components/ProgressBar";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const staggerSlideEls = document.querySelectorAll(".reveal-type");
    staggerSlide(staggerSlideEls);
    lenisScrollUpdate();
  }, []);

  return (
    <div className="homepage">
      <Header />
      <ProgressBar />
      <Hero />
      <Details />
      <MyProjects />
      <AboutMe />
      <Contact />
    </div>
  );
}
export default App;
