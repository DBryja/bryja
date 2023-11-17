import { SiFacebook, SiDiscord, SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
interface IItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}
const listItems: IItem[] = [
  {
    name: "facebook",
    link: "https://www.facebook.com/BryjaD/",
    icon: <SiFacebook />,
  },
  {
    name: "discord",
    link: "https://www.discordapp.com/users/1027836544859508817",
    icon: <SiDiscord />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/dawid-bryja-898134249/",
    icon: <SiLinkedin />,
  },
  {
    name: "github",
    link: "https://github.com/DBryja",
    icon: <SiGithub />,
  },
  {
    name: "dawbryja@gmail.com",
    link: "mailto:dawbryja@gmail.com",
    icon: <SiGmail />,
  },
];

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__inside">
        <div className="content">
          <h3>Contact</h3>
          <ul className="ul--arrow">
            {listItems.map((item, i) => {
              return (
                <li key={i}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="content__extra">
            I am currently looking for an intership or a junior position.
            <table>
              <tbody>
                <tr>
                  <td>Remote</td>
                  <td>Anywhere using polish or english</td>
                </tr>
                <tr>
                  <td>Hybrid</td>
                  <td>Kraków, Katowice, Bielsko-Biała</td>
                </tr>
                <tr>
                  <td>Stationary</td>
                  <td>Kraków, Bielsko-Biała</td>
                </tr>
              </tbody>
            </table>
            <div>
              <p>Looking for a website for Yourself?</p>
              <p>Feel free to message me and We'll get to work :^)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
