"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Project 1",
    description: "This is a project description",
    foto: "https://via.placeholder.com/150",
    technologies: [{ name: "React" }, { name: "Tailwind" }, { name: "Node" }],
    link: "#",
  },
  {
    num: "02",
    title: "Project 2",
    description: "This is a project description",
    foto: "https://via.placeholder.com/150",
    technologies: [{ name: "React" }, { name: "Tailwind" }, { name: "Node" }],
    link: "#",
  },
  {
    num: "03",
    title: "Project 3",
    description: "This is a project description",
    foto: "https://via.placeholder.com/150",
    technologies: [{ name: "React" }, { name: "Tailwind" }, { name: "Node" }],
    link: "#",
  },
  {
    num: "04",
    title: "Project 4",
    description: "This is a project description",
    foto: "https://via.placeholder.com/150",
    technologies: [{ name: "React" }, { name: "Tailwind" }, { name: "Node" }],
    link: "#",
  },
  {
    num: "05",
    title: "Project 5",
    description: "This is a project description",
    foto: "https://via.placeholder.com/150",
    technologies: [{ name: "React" }, { name: "Tailwind" }, { name: "Node" }],
    link: "#",
  },
  {
    num: "06",
    title: "Project 6",
    description: "This is a project description",
    foto: "https://via.placeholder.com/150",
    technologies: [{ name: "React" }, { name: "Tailwind" }, { name: "Node" }],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-[80vh] flex flex-col justify-center py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {project.num}
                  </div>
                  <Link
                    href={project.title}
                    className="w-[45px] h-[45px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.title}
                </h2>
                <p>{project.description}</p>
                <ul className="flex gap-4">
                  {project.technologies.map((item, index) => {
                    return (
                      <li key={index} className="text-lg text-accent">
                        {item.name}
                        {index !== project.technologies.length - 1 && ", "}
                      </li>
                    );
                  })}
                </ul>
                {/* <Image src={{}} alt="title" className="w-3 h-4" /> */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
