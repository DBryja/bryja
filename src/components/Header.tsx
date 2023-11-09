import gsap from "gsap";
import { useRef, useEffect } from "react";
import { BiChevronsDown } from "react-icons/bi";
import Lenis from "@studio-freight/lenis";

export default function Header() {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const scrollDownRef = useRef(null);
  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    const scrollDown = scrollDownRef.current;

    const tl = gsap.timeline({ paused: true });
    tl.to(header, { maxHeight: "15vh" });
    tl.to(logo, { maxHeight: "40%" }, "<");

    const lenis = new Lenis();
    lenis.on("scroll", () => {
      tl.progress(window.scrollY / (window.innerHeight / 2));
      gsap.to(scrollDown, { opacity: 0 });
    });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="header" ref={headerRef}>
      <img src="/images/logo.svg" alt="logo" className="header__logo" ref={logoRef} />
      <div className="header__scrollDown" ref={scrollDownRef}>
        <span>scroll down</span>
        <BiChevronsDown />
      </div>
    </div>
  );
}
