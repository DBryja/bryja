// import TextRotator from "./TextRotator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
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
        y: 100,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="aboutMe">
      <h1>
        <span className="reveal-type">Hi! My name is</span>
        <span className="bryja reveal-type">Dawid Bryja.</span>
      </h1>
      <h2 className="reveal-type">I am building things for web.</h2>
    </div>
  );
}
