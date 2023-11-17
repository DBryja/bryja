import { useEffect } from "react";
import { fadeIn } from "../hooks_utils/animations";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const yearsOld = new Date().getFullYear() - 2002;
  useEffect(() => {
    const fadeInEls = document.querySelectorAll(".content--fadeIn");
    fadeIn(fadeInEls, 1);
  }, []);

  const { t } = useTranslation();
  return (
    <div className="aboutMe">
      <h3 className="reveal-type">{t("aboutMe.h3")}</h3>
      <div className="aboutMe__inside">
        <div className="content content--fadeIn">
          {t("aboutMe.span1")} {yearsOld}
          {t("aboutMe.span2")}{" "}
          <a className="pk" href="https://www.pk.edu.pl" target="_blank" rel="noreferrer">
            {t("aboutMe.pk")}
            <img src="/images/pk.svg" alt="pk" />.
          </a>
          <br />
          {t("aboutMe.span3")} <br />
          {t("aboutMe.span4")}{" "}
          <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer" className="awwwards">
            <img src="/images/awwwards.svg" alt="awwwards" />
          </a>{" "}
          {t("aboutMe.span5")} <br />
          {t("aboutMe.span6")}
          <br />
          {t("aboutMe.span7")}
        </div>
      </div>
    </div>
  );
}
