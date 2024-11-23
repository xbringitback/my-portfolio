"use client";

import { IconItem, icons } from "@/lib/constants";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  return (
    <section className="h-full">
      <div className="container h-full ">
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
              Here’s an overview of the technologies I work with to build
              modern, efficient, and user-friendly applications. Additionally,
              I’m currently expanding my expertise by learning PHP and Laravel,
              adding even more versatility to my skill set.
            </p>
          </div>
          <motion.div
            className="flex flex-wrap gap-6 sm:flex-row flex-col justify-start items-center pb-8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
          >
            {icons.map((icon: IconItem) => {
              return (
                <div key={icon.name} className="">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex items-center justify-center border-b rounded-md bg-primary py-3 pr-12 pl-4 gap-6 group hover:border-accent transition-all duration-500">
                      <div className="rounded-sm p-[1px] group-hover:text-accent transition-all duration-500">
                        {icon.icon}
                      </div>
                      <p className="group-hover:text-accent transition-all duration-500">
                        {icon.name}
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
