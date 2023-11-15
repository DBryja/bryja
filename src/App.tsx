import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { staggerSlide, lenisScrollUpdate } from "./hooks_utils/animations";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Details from "./components/Details";
import MyProjects from "./components/MyProjects";
import AboutMe from "./components/AboutMe";
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
      <Hero />
      <Details />
      <MyProjects />
      <AboutMe />
      <div className="contact">
        <div className="contact__inside">
          <div className="content">
            <h3>Contact</h3>
            <ul className="ul--arrow">
              <li>
                <a href="https://www.facebook.com/BryjaD/" target="_blank" rel="noreferrer">
                  facebook
                </a>
              </li>
              <li>
                <a href="https://www.discordapp.com/users/1027836544859508817" target="_blank" rel="noreferrer">
                  discord
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dawid-bryja-898134249/" target="_blank" rel="noreferrer">
                  linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/DBryja" target="_blank" rel="noreferrer">
                  github
                </a>
              </li>
              <li>
                <a href="mailto:dawbryja@gmail.com">dawbryja@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
