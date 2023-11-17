import { useTranslation } from "react-i18next";
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
    link: "https://www.linkedin.com/in/BryjaD/",
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
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="contact__inside">
        <div className="content content--fadeIn">
          <h3>{t("contact.h3")}</h3>
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
            {t("contact.currently")}
            <table>
              <tbody>
                <tr>
                  <td>{t("contact.table.tr1.td1")}</td>
                  <td>{t("contact.table.tr1.td2")}</td>
                </tr>
                <tr>
                  <td>{t("contact.table.tr2.td1")}</td>
                  <td>{t("contact.table.tr2.td2")}</td>
                </tr>
                <tr>
                  <td>{t("contact.table.tr3.td1")}</td>
                  <td>{t("contact.table.tr3.td2")}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <p>{t("contact.ps.span1")}</p>
              <p>{t("contact.ps.span2")}</p>
            </div>
          </div>
        </div>
      </div>
      <footer>Website made and designed by Dawid Bryja.</footer>
    </div>
  );
}
