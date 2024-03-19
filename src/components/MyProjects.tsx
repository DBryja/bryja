import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { slideInAnim } from "../hooks_utils/animations";
import { useTranslation } from "react-i18next";
import { projects } from "../projects";
import { SiGithub } from "react-icons/si";

export default function MyProjects() {
  useEffect(() => {
    const bars = document.querySelectorAll(".project-card--slideIn");
    slideInAnim(bars, 1);
  }, []);

  const { t } = useTranslation();

  return (
    <div className="my-projects">
      <h3 className="reveal-type">{t("projects.h3")}</h3>
      {projects.map((project, key) => (
        <ProjectCard key={key} {...project} />
      ))}
      <h5 style={{ textAlign: "center", fontSize: "1.25rem" }}>
        <a href="https://github.com/DBryja" target="_blank" rel="noreferrer">
          {t("projects.more")}
          <SiGithub />
        </a>
      </h5>
    </div>
  );
}
