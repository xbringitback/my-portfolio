import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaGit,
  FaEnvelope,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiJavascriptFill,
} from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiExpress, SiPrisma, SiVite } from "react-icons/si";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";

//* icons
export interface IconItem {
  icon: JSX.Element;
  name: string;
}

export const icons: IconItem[] = [
  {
    icon: <FaHtml5 className="w-16 h-16" />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt className="w-16 h-16" />,
    name: "CSS",
  },
  {
    icon: <FaSass className="w-16 h-16" />,
    name: "Sass",
  },
  {
    icon: <FaReact className="w-16 h-16" />,
    name: "React",
  },
  {
    icon: <FaNodeJs className="w-16 h-16" />,
    name: "NodeJs",
  },
  {
    icon: <FaFigma className="w-16 h-16" />,
    name: "Figma",
  },
  {
    icon: <FaGithub className="w-16 h-16" />,
    name: "Github",
  },
  {
    icon: <FaGit className="w-16 h-16" />,
    name: "Git",
  },
  {
    icon: <RiTailwindCssFill className="w-16 h-16" />,
    name: "TailwindCss",
  },
  {
    icon: <RiNextjsFill className="w-16 h-16" />,
    name: "NextJs",
  },
  {
    icon: <RiJavascriptFill className="w-16 h-16" />,
    name: "Javascript",
  },
  {
    icon: <IoLogoVercel className="w-16 h-16" />,
    name: "Vercel",
  },
  {
    icon: <SiExpress className="w-16 h-16" />,
    name: "Express",
  },
  {
    icon: <SiPrisma className="w-16 h-16" />,
    name: "Prisma",
  },
  {
    icon: <SiVite className="w-16 h-16" />,
    name: "Vite",
  },
  {
    icon: <BiLogoMongodb className="w-16 h-16" />,
    name: "MongoDb",
  },
  {
    icon: <BiLogoTypescript className="w-16 h-16" />,
    name: "Typescript",
  },
];

//* links
export interface LinkItem {
  name: string;
  path: string;
}

export const links: LinkItem[] = [
  {
    name: "intro",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "About me",
    path: "/about",
  },
];

//* projects
export interface ProjectItem {
  num: string;
  title: string;
  description: string;
  foto: string;
  technologies: { name: string }[];
  link: string;
  github: string;
}

export const projects: ProjectItem[] = [
  {
    num: "01",
    title: "Tok-Tok",
    description:
      "This is my final project from the bootcamp. I worked with other developers to connect and build the backend to the frontend, which was also built to store and display users, posts, photos, likes and comments of the social media application.",
    foto: "/assets/toktok.png",
    technologies: [
      { name: "React" },
      { name: "NodeJs" },
      { name: "MongoDB" },
      { name: "ExpressJs" },
    ],
    link: "https://abschlussprojekt-toktok.onrender.com/",
    github: "https://github.com/xbringitback/Abschlussprojekt-FullStack-TokTok",
  },
  {
    num: "02",
    title: "Next-Jotion",
    description:
      "A project I built for myself to create, delete, reactivate notes with emoticons and images and make everything visible on the server. With text editing, markers and much more.",
    foto: "/assets/jotion.png",
    technologies: [
      { name: "React" },
      { name: "Typescript" },
      { name: "Tailwind" },
      { name: "Edgestore" },
      { name: "Convex" },
      { name: "NextJs" },
    ],
    link: "https://next-jotion-eight.vercel.app/",
    github: "https://github.com/xbringitback/next-jotion",
  },
  {
    num: "03",
    title: "Airbnb Clone",
    description:
      "This is an Airbnb clone I built for practice. I wanted to get an overview of some packages and get to know Nextjs and TypeScript. I also wanted to see how I could use Prisma and Cloudinary to store and display images. ",
    foto: "/assets/airbnb.png",
    technologies: [
      { name: "React" },
      { name: "Typescript" },
      { name: "Tailwind" },
      { name: "Prisma" },
      { name: "Cloudinary" },
      { name: "NextJs" },
    ],
    link: "https://booking-next-phi.vercel.app/",
    github: "https://github.com/xbringitback/next-airbnb-clone",
  },
  {
    num: "04",
    title: "Simple Note",
    description:
      "A coding challenge given to me to prove my skills. Certain features had to be integrated that I had to pay attention to. I finished it as a MERN stack.",
    foto: "/assets/simplenote.png",
    technologies: [
      { name: "React" },
      { name: "Tailwind" },
      { name: "Typescript" },
      { name: "NodeJs" },
      { name: "ExpressJs" },
      { name: "MongoDB" },
    ],
    link: "https://simple-note-pi.vercel.app/",
    github: "https://github.com/xbringitback/simple-note",
  },
  {
    num: "05",
    title: "English Journey",
    description:
      "A blog site I created to learn English and share my experiences. A nice classic blog site using a newsletter, create form and Nextjs with a document oriented database.",
    foto: "/assets/englishblog.png",
    technologies: [
      { name: "React" },
      { name: "Typescript" },
      { name: "Tailwindcss" },
      { name: "NextJs" },
      { name: "MongoDB" },
      { name: "Prisma" },
    ],
    link: "https://english-blog-mu.vercel.app/",
    github: "https://github.com/xbringitback/english-blog",
  },
  // {
  //   num: "06",
  //   title: "Project 6",
  //   description: "This is a project description",
  //   foto: "#",
  //   technologies: [{ name: "React" }, { name: "Tailwind" }, { name: "Node" }],
  //   link: "#",
  //   github: "#",
  // },
];

//* infos
export interface InfoItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const info: InfoItem[] = [
  {
    icon: <FaEnvelope />,
    title: "Mail",
    description: "c.muett23@gmail.com",
  },
];

//* socials
export interface SocialLink {
  icon: JSX.Element;
  path: string;
}

export const socials: SocialLink[] = [
  { icon: <FaGithub />, path: "https://github.com/xbringitback" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/christopher-m%C3%BCtterlein/",
  },
  { icon: <FaDiscord />, path: "https://discord.com/users/103485149622063104" },
];

//* stats
export interface Stat {
  num: number;
  text: string;
}

export const stats: Stat[] = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 6,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies learned",
  },
  {
    num: 500,
    text: "Code commits",
  },
];
