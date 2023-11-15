import { useEffect } from "react";
import { fadeIn } from "../hooks_utils/animations";

export default function AboutMe() {
  const yearsOld = new Date().getFullYear() - 2002;
  useEffect(() => {
    const fadeInEls = document.querySelectorAll(".content--fadeIn");
    fadeIn(fadeInEls, 1);
  }, []);
  return (
    <div className="aboutMe">
      <h3 className="reveal-type">About me</h3>
      <div className="aboutMe__inside">
        <div className="content content--fadeIn">
          I am a {yearsOld}-year-old student at the{" "}
          <a className="pk" href="https://www.pk.edu.pl" target="_blank" rel="noreferrer">
            Krakow University of Technology
            <img src="/images/pk.svg" alt="pk" />
          </a>{" "}
          eager to learn and aspiring to become a professional web developer. <br />
          My dream is to work on{" "}
          <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer" className="awwwards">
            <img src="/images/awwwards.svg" alt="awwwards" />
          </a>{" "}
          winning websites. <br />
          I reside in a small mountainous town near the Slovakian border.
          <br />
          In my leisure time, I enjoy cooking, hiking and engaging in both computer and board games.
        </div>
      </div>
    </div>
  );
}
