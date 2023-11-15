import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
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

export function fadeIn(items: NodeListOf<Element>, duration: number) {
  items.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
      stagger: 1,
      opacity: 0,
      x: -20,
      duration: duration,
    });
  });
}

export function staggerSlide(items: NodeListOf<Element>) {
  items.forEach((item) => {
    const text = new SplitType(item as HTMLElement, { types: "chars,words" });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        end: "top 65%",
        scrub: true,
      },
      transformOrigin: "top",
      scaleY: 0.5,
      y: -50,
      opacity: 0,
      stagger: 0.1,
    });
  });
}

export function lenisScrollUpdate() {
  const lenis = new Lenis({
    smoothTouch: true,
    touchMultiplier: 1,
    // syncTouch: true,
    gestureOrientation: "vertical",
  });
  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return lenis;
}
