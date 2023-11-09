import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

interface IBarsSlider {
  items: (string | JSX.Element)[][];
}
export default function BarsSlider({ items }: IBarsSlider) {
  const bars: (string | JSX.Element)[][][] = [];
  for (let i = 0; i < items.length; i += 4) bars.push(items.slice(i, i + 4));

  useEffect(() => {
    const barsList = document.querySelectorAll(".items-slider__bar");
    barsList.forEach((bar, index) => {
      const multiplier = index % 2 === 0 ? -1 : 1;
      gsap.from(bar, {
        scrollTrigger: {
          trigger: bar,
          start: "top 100%",
          end: "top 80%",
        },
        xPercent: multiplier * 100,
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
  }, [items]);

  return (
    <div className="items-slider">
      {bars.map((bar, index) => {
        return (
          <div className="items-slider__bar bar" key={index}>
            {bar.map((item, key) => {
              return (
                <span className="bar__item" key={key}>
                  {item[0]} {item[1]}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
