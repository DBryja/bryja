interface IProjectCard {
  heading: string | JSX.Element;
  desc: string | JSX.Element;
  links: string | JSX.Element;
  graphics: JSX.Element;
}
export default function ProjectCard({ heading, desc, links, graphics }: IProjectCard) {
  return (
    <div className="project-card slideIn">
      <div className="project-card__text">
        <h4>{heading}</h4>
        <div className="desc">{desc}</div>
        <div className="links">{links}</div>
      </div>
      <div className="project-card__graphics">{graphics}</div>
    </div>
  );
}
