import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function Header() {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;

    const tl = gsap.timeline({ paused: true });
    tl.to(header, { maxHeight: "15vh" });
    tl.to(logo, { maxHeight: "40%" }, "<");

    const scrollHandler = () => {
      tl.progress(window.scrollY / (window.innerHeight / 2));
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div className="header" ref={headerRef}>
      <img src="/images/logo.svg" alt="logo" className="logo" ref={logoRef} />
    </div>
  );
}
