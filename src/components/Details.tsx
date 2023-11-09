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

const type1 = [
  [<SiReact />, "React"],
  [<SiTypescript />, "TypeScript"],
  [<SiJavascript />, "JavaScript"],
  [<SiNodedotjs />, "NodeJS"],
  [<SiExpress />, "ExpressJS"],
  [<SiMysql />, "MySQL"],
];
const type2 = [
  [<SiCss3 />, "CSS"],
  [<SiSass />, "SASS"],
  [<SiTailwindcss />, "TailwindCSS"],
  [<SiGreensock />, "GSAP"],
];
const type3 = [
  [<SiVisualstudiocode />, "Visual Studio Code"],
  [<SiFigma />, "Figma"],
  [<SiPostman />, "Postman"],
  [<SiGit />, "Git"],
  [<SiGithub />, "GitHub"],
];

const techs = [type1, type2, type3];

export default function Details() {
  return (
    <div className="details">
      <h3 className="reveal-type">Technologies and tools I use:</h3>
      <div className="slider">
        {/* {techs.map((type)=>{
          type.map((item)=>{
            return <span>{item[0]},{item[1]}</span>
          })
        })} */}
        {techs.map((type) => {
          return (
            <div className="slider__bar bar">
              {type.map((item) => {
                return (
                  <span className="bar__item">
                    {item[0]} {item[1]}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
