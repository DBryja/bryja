import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

export const projects = [
  {
    heading: "Elephant Coffee",
    desc: (
      <>
        Key Features:
        <ul>
          <li>GSAP ScrollTrigger - pin animations</li>
        </ul>
        <span className="break">Tools:</span>
        <ul>
          <li>React, Typescript</li>
          <li>TailwindCSS, GSAP</li>
          <li>VSC, Figma, Adobe(AP, AI)</li>
        </ul>
      </>
    ),
    links: (
      <>
        <a href="https://github.com/DBryja/elephantcoffee" target="_blank" rel="noreferrer">
          <SiGithub /> Github
        </a>
        <a href="https://elephantcoffee.vercel.app" target="_blank" rel="noreferrer">
          <FaGlobe /> Live
        </a>
      </>
    ),
    graphics: (
      <video autoPlay loop>
        <source src="/images/ElephantCoffee.webm" type="video/webm" alt="ElephantCoffee scroll video" />
      </video>
      ),
  },
  {
    heading: "CarDetailing Homepage",
    desc: (
      <>
        Key Features:
        <ul>
          <li>Responsive design</li>
          <li>Image and content slider</li>
          <li>On scroll animations</li>
        </ul>
        <span className="break">Tools:</span>
        <ul>
          <li>NextJS, Typescript</li>
          <li>TailwindCSS, CSS3</li>
          <li>JetBrains Webstorm, Figma</li>
        </ul>
      </>
    ),
    links: (
      <>
        <a href="https://github.com/DBryja/car-detailing" target="_blank" rel="noreferrer">
          <SiGithub /> Github
        </a>
        <a href="https://bryja-car-detailing.vercel.app/" target="_blank" rel="noreferrer">
          <FaGlobe /> Live
        </a>
      </>
    ),
    graphics: (
      <video autoPlay loop>
        <source src="/images/CarDetailingVideo.webm" type="video/webm" alt="CarDetailing Scroll video" />
      </video>
    ),
  },
  // {
  //   heading: "Room Homepage",
  //   desc: (
  //     <>
  //       Key Features:
  //       <ul>
  //         <li>Image slider</li>
  //         <li>Responsive design</li>
  //       </ul>
  //       <span className="break">Tools:</span>
  //       <ul>
  //         <li>React, Typescript</li>
  //         <li>TailwindCSS, HTML5(EJS)</li>
  //         <li>Visual Studio Code</li>
  //       </ul>
  //     </>
  //   ),
  //   links: (
  //     <>
  //       <a href="https://github.com/DBryja/room-homepage" target="_blank" rel="noreferrer">
  //         <SiGithub /> Github
  //       </a>
  //       <a href="https://room-homepage-dbryja.vercel.app/" target="_blank" rel="noreferrer">
  //         <FaGlobe /> Live
  //       </a>
  //     </>
  //   ),
  //   graphics: <img src="/images/roomHomepage.webp" alt=" homepage" />,
  // },
  {
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
          <li>MySQL, HTML5(EJS), SASS(SCSS)</li>
          <li>VSC, Postman, Figma, Adobe(AP, AI), XAMPP</li>
        </ul>
      </>
    ),
    links: (
      <a href="https://github.com/DBryja/Buddy-Explorer" target="_blank" rel="noreferrer">
        <SiGithub /> Github
      </a>
    ),
    graphics: <img src="/images/BuddyExplorer.png" alt="BuddyExplorer homepage" />,
  },
];
