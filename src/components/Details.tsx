import { useTranslation } from "react-i18next";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiGreensock,
  SiVisualstudiocode,
  SiFigma,
  SiGit,
  SiGithub,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import BarsSlider from "./BarsSlider";

const items = [
  [<SiReact />, "React"],
  [<SiTypescript />, "TypeScript"],
  [<SiJavascript />, "JavaScript"],
  [<SiNodedotjs />, "NodeJS"],
  [<SiExpress />, "ExpressJS"],
  [<SiMysql />, "MySQL"],
  [<SiCss3 />, "CSS"],
  [<SiSass />, "SASS"],
  [<SiTailwindcss />, "TailwindCSS"],
  [<SiGreensock />, "GSAP"],
  [<SiVisualstudiocode />, "VSC"],
  [<SiFigma />, "Figma"],
  [<SiPostman />, "Postman"],
  [<SiGit />, "Git"],
  [<SiGithub />, "GitHub"],
];

export default function Details() {
  const { t } = useTranslation();
  return (
    <div className="details">
      <h3 className="reveal-type">{t("technologies.h3")}</h3>
      <BarsSlider items={items} />
    </div>
  );
}
