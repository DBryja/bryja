// import TextRotator from "./TextRotator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useTranslation();

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

  setTimeout(() => {
    document.querySelector(".bryja div.word:last-child div:nth-child(4)")?.setAttribute("data-after", t("hero.after"));
  }, 50);
  return (
    <div className="hero">
      <h1>
        <span className="reveal-type">{t("hero.h1")}</span>
        <span
          className="bryja reveal-type"
          onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
        >
          Dawid Bryja.
        </span>
      </h1>
      <h2 className="reveal-type">{t("hero.h2")}</h2>
    </div>
  );
}
