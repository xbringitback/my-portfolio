"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiJavascriptFill,
} from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiExpress, SiPrisma, SiVite } from "react-icons/si";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";

import { motion } from "framer-motion";

const icons = [
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

const Skills = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <motion.div
          className="xl:pt-8"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
        >
          <div className="text-center xl:text-left">
            <h2 className="text-3xl font-bold mb-9">
              My <span className="text-accent">Skills</span>
            </h2>
            <p className="xl:w-3/4 mb-9 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat, perspiciatis accusamus rem perferendis atque asperiores,
              repudiandae nihil explicabo ratione rerum vitae! Repudiandae cum
              aperiam, molestiae ut officia hic a molestias!
            </p>
          </div>
          <motion.div
            className="flex flex-wrap gap-6 sm:flex-row flex-col justify-start items-center sm:items-start pb-8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
          >
            {icons.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex items-center justify-center border-b rounded-md bg-primary py-3 pr-12 pl-4 gap-6 group hover:border-accent transition-all duration-500">
                      <div className="rounded-sm p-[1px] group-hover:text-accent transition-all duration-500">
                        {item.icon}
                      </div>
                      <p className="group-hover:text-accent transition-all duration-500">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
