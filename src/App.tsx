import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Details from "./components/Details";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const splitTypes = document.querySelectorAll(".reveal-type");
    splitTypes.forEach((char, i) => {
      const text = new SplitType(char as HTMLElement, { types: "chars,words" });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 90%",
          end: "top 65%",
          scrub: true,
        },
        y: -100,
        opacity: 0,
        stagger: 0.1,
      });
    });
    const lenis = new Lenis();
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="homepage">
      <Header />
      <AboutMe />
      <Details />
    </div>
  );
}
export default App;
