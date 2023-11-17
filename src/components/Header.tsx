import gsap from "gsap";
import { useRef, useEffect } from "react";
import { BiChevronsDown } from "react-icons/bi";
import SplitType from "split-type";
import { lenisScrollUpdate } from "../hooks_utils/animations";

export default function Header() {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const scrollDownRef = useRef(null);
  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    const scrollDown = scrollDownRef.current;
    let logoChars: HTMLElement[];
    if (logo) {
      new SplitType(logo as HTMLElement, { types: "chars", charClass: "logo__char active" });
      logoChars = Array.from(document.querySelectorAll(".logo__char") as unknown as HTMLCollectionOf<HTMLElement>);
      logoChars.forEach((item, i) => {
        item.style.setProperty("--char-index", `${i}`);
      });
    }

    const tl = gsap.timeline({ paused: true });
    tl.to(header, { maxHeight: "12vh" });
    const fz = window.innerWidth < 520 ? "2rem" : "3rem";
    tl.to(logo, { fontSize: fz }, "<");

    const lenisHeader = lenisScrollUpdate();
    lenisHeader.on("scroll", () => {
      tl.progress(window.scrollY / (window.innerHeight / 2));
      gsap.to(scrollDown, { opacity: 0 });
    });
    gsap.ticker.lagSmoothing(0);
  }, []);

  // const fun = (item: HTMLElement) =>
  // tl.progress() < 0.9 ? item.classList.add("active") : item.classList.remove("active");
  // logoChars.forEach((item) => fun(item));
  return (
    <div className="header" ref={headerRef}>
      {/* <img src="/images/logo.svg" alt="logo" className="header__logo" ref={logoRef} />
       */}
      <span className="header__logo logo" ref={logoRef}>
        &#123;bryja&#125;_
      </span>
      <div className="header__scrollDown" ref={scrollDownRef}>
        <span>scroll down</span>
        <BiChevronsDown />
      </div>
      4
    </div>
  );
}
