import { useEffect } from "react";
import { lenisScrollUpdate, slideInAnim } from "../hooks_utils/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

interface IBarsSlider {
  items: (string | JSX.Element)[][];
}
export default function BarsSlider({ items }: IBarsSlider) {
  const bars: (string | JSX.Element)[][][] = [];
  for (let i = 0; i < items.length; i += 4) bars.push(items.slice(i, i + 4));

  useEffect(() => {
    const bars = document.querySelectorAll(".items-slider__bar");
    slideInAnim(bars, 1.5);
    const lenis = lenisScrollUpdate();
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });
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
