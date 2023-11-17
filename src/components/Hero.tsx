// import TextRotator from "./TextRotator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();
  document.querySelector(".bryja div.word:last-child div:nth-child(4)")?.setAttribute("data-after", t("hero.after"));

  return (
    <div className="hero">
      <h1>
        <span className="reveal-type">{t("hero.h1")}</span>
        <span className="bryja reveal-type" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
          Dawid Bryja.
        </span>
      </h1>
      <h2 className="reveal-type">{t("hero.h2")}</h2>
    </div>
  );
}
