// import TextRotator from "./TextRotator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const bryja = document.querySelector(".bryja");
    gsap.from(bryja, {
      scrollTrigger: {
        trigger: bryja,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
      "--opacity": 0,
      duration: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="hero">
      <h1>
        <span className="reveal-type">Hi! My name is</span>
        <span className="bryja reveal-type">Dawid Bryja.</span>
      </h1>
      <h2 className="reveal-type">I am building things for web.</h2>
    </div>
  );
}
