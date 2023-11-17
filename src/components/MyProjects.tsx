import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { SiGithub } from "react-icons/si";
import { slideInAnim } from "../hooks_utils/animations";
import { useTranslation } from "react-i18next";

const project1 = {
  heading: "Buddy Explorer",
  desc: (
    <>
      Key Features:
      <ul>
        <li>MultiStep register form</li>
        <li>MySQL users database, registration + modifying profile</li>
        <li>Searching users with filtering</li>
        <li>Autocomplete names based on database queries</li>
      </ul>
      <span className="break">Tools:</span>
      <ul>
        <li>JavaScript (NodeJS, ExpressJS)</li>
        <li>HTML5(EJS), SASS(SCSS)</li>
        <li>Programs - VSC, Postman, Figma, Adobe(AP, AI), XAMPP</li>
      </ul>
    </>
  ),
  links: (
    <a href="https://github.com/DBryja/Buddy-Explorer" target="_blank" rel="noreferrer">
      <SiGithub /> Github
    </a>
  ),
  graphics: <img src="/images/BuddyExplorer.png" alt="BuddyExplorer homepage" />,
};

const projects = [project1, project1, project1];

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
    </div>
  );
}
