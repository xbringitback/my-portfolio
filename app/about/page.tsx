"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            <TabsTrigger value="currently">
              What I&apos;m Currently doing?
            </TabsTrigger>
          </TabsList>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[70vh] w-full"
          >
            <TabsContent value="about" className="w-full">
              <div>
                <h3 className="text-[36px] ">
                  I&apos;m Chris <span className="text-accent"> M.</span>{" "}
                </h3>
                <p>
                  Born and raised in Munich, I tried out a lot of things and
                  came to the conclusion that the web and software development
                  is what I like best. I left my comfort zone and moved to the
                  Ruhrgebiet near Cologne. I want to build my career on this and
                  I strongly believe in continuous learning and improving
                  myself, so I try my best to learn in every possible situation,
                  unfavorable or not.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div>
                <h3 className="text-[36px] ">
                  My <span className="text-accent"> Exp</span>erience
                </h3>
                <p>
                  I have invested most of my time in courses, videos, and my own
                  small projects. But now I want to gain professional experience
                  and practice the working world as a developer.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="soft" className="w-full">
              <div>
                <h3 className="text-[36px] ">
                  <span className="text-accent"> Soft</span> Skills
                </h3>
                <p>
                  As a developer, I am passionate, a quick learner, a problem
                  solver, open-minded, and a team player. These soft skills
                  allow me to stay current, approach challenges creatively, and
                  work efficiently in a team to develop outstanding
                  applications.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="currently" className="w-full">
              <div>
                <h3 className="text-[36px]">
                  What I&apos;m Currently{" "}
                  <span className="text-accent"> doing</span>?
                </h3>
                <p>
                  I have tried working as a freelancer and was able to gain some
                  experience. Now I am looking for a job in a company because I
                  would like to work on a product that is continuously produced
                  and improved.
                </p>
              </div>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
