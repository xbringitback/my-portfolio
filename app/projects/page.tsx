"use client";

import Image from "next/image";
import Link from "next/link";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { ProjectItem, projects } from "@/lib/constants";

const Projects: React.FC = () => {
  return (
    <section className="min-[80vh] flex flex-col justify-center py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] auto-rows-min"
        >
          {projects.map((project: ProjectItem) => {
            return (
              <div
                key={project.num}
                className="flex-1 flex flex-col justify-between gap-6 group relative h-full"
              >
                <div className="space-y-6">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500 pl-2">
                      {project.num}
                    </div>
                    <div className="flex items-center gap-3 pr-2 z-[2]">
                      <Link
                        href={project.github}
                        className="w-[35px] h-[35px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group/item"
                      >
                        <FaGithub className="text-primary text-xl group-hover/item:animate-bounce" />
                      </Link>
                      <Link
                        href={project.link}
                        className="w-[35px] h-[35px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                      >
                        <BsArrowDownRight className="text-primary text-xl" />
                      </Link>
                    </div>
                  </div>

                  <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 pl-2">
                    {project.title}
                  </h2>
                  <p className=" pl-2 ">{project.description}</p>
                </div>
                <div className="opacity-0 xl:group-hover:opacity-100 transition-opacity duration-700 z-1">
                  <Image
                    src={project.foto}
                    alt=""
                    priority
                    quality={100}
                    fill
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
                <div className="">
                  <ul className="flex gap-4 flex-wrap pl-2 h-12 mb-4 xl:mb-0">
                    {project.technologies.map((item, index) => {
                      return (
                        <li key={index} className="text-accent text-sm">
                          {item.name}
                          {index !== project.technologies.length - 1 && ", "}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="border-b border-white/20 w-full rounded-md "></div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
