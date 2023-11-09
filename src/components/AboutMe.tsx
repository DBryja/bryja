// import TextRotator from "./TextRotator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  useEffect(() => {
    const bryja = document.querySelector(".bryja");
    gsap.from(bryja, {
      scrollTrigger: {
        trigger: bryja,
        start: "top 90%",
        scrub: true,
      },
      "--opacity": 0,
      duration: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="aboutMe">
      <h1>
        <span className="reveal-type">Hi! My name is</span>
        <span className="bryja reveal-type">Dawid Bryja.</span>
      </h1>
      <h2 className="reveal-type right">I am building things for web.</h2>
    </div>
  );
}
