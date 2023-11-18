import gsap from "gsap";
import { useRef, useEffect } from "react";
import { BiChevronsDown } from "react-icons/bi";
import SplitType from "split-type";
import { lenisScrollUpdate } from "../hooks_utils/animations";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

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
    tl.to(scrollDown, { opacity: -1, y: -500 }, "<");
    tl.to(scrollDown, { display: "none" });

    const lenisHeader = lenisScrollUpdate();
    lenisHeader.on("scroll", () => {
      tl.progress(window.scrollY / (window.innerHeight / (window.innerHeight < 900 ? 0.9 : 0.8)));
    });
    gsap.ticker.lagSmoothing(0);
    return () => {
      tl.kill();
      lenisHeader.destroy();
    };
  }, []);

  // const fun = (item: HTMLElement) =>
  // tl.progress() < 0.9 ? item.classList.add("active") : item.classList.remove("active");
  // logoChars.forEach((item) => fun(item));
  const { t } = useTranslation();
  return (
    <div className="header" ref={headerRef}>
      {/* <img src="/images/logo.svg" alt="logo" className="header__logo" ref={logoRef} />
       */}
      <span className="header__logo logo" ref={logoRef} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        &#123;bryja&#125;_
      </span>
      <div className="header__scrollDown" ref={scrollDownRef}>
        <LanguageSelector />
        <span>{t("header.scroll")}</span>
        <BiChevronsDown className="arrows" />
      </div>
    </div>
  );
}
