import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

export function slideInAnim(items: NodeListOf<Element>, duration: number) {
  items.forEach((item, index) => {
    const multiplier = index % 2 === 0 ? -1 : 1;
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
      xPercent: multiplier * 100,
      opacity: 0,
      duration: duration,
    });
  });
}

export function lenisScrollUpdate() {
  const lenis = new Lenis();
  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return lenis;
}
