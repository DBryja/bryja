import { lenisScrollUpdate } from "../hooks_utils/animations";
import gsap from "gsap";
import { useEffect, useRef } from "react";
export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const height = document.documentElement.scrollHeight - 0.9 * document.documentElement.clientHeight;
    const lenisProgressBar = lenisScrollUpdate();
    const tlPB = gsap.timeline({ paused: true });
    tlPB.to(barRef.current, { maxWidth: "100%" });

    lenisProgressBar.on("scroll", () => {
      tlPB.progress(window.scrollY / height);
    });
  }, []);
  return <div className="progressBar" ref={barRef}></div>;
}
