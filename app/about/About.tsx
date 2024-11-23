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
                  Born and raised in Munich, I’ve always been curious and eager
                  to try new things. After exploring various paths, I discovered
                  my passion for web and software development—a field where
                  creativity meets logic and where challenges drive innovation.
                  To fully embrace this journey, I moved to the Ruhr region near
                  Cologne, stepping out of my comfort zone to focus on building
                  my skills and career. I thrive on solving problems and turning
                  ideas into functional, user-friendly solutions. Continuous
                  learning is at the heart of everything I do, and I enjoy
                  keeping up with the latest trends and technologies. Whether
                  it’s a challenging project or a new tool to master, I see
                  every experience as an opportunity to grow and improve.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div>
                <h3 className="text-[36px] ">
                  My <span className="text-accent"> Exp</span>erience
                </h3>
                <p>
                  My journey into web and software development has been driven
                  by curiosity and a commitment to learning. I’ve dedicated
                  countless hours to courses, tutorials, and hands-on projects,
                  building a strong foundation in programming and development.
                  From creating small personal projects to diving deep into
                  problem-solving, these experiences have honed my skills and
                  fueled my passion for the craft. Now, I’m ready to take the
                  next step: gaining professional experience and contributing to
                  real-world projects as a developer. I’m eager to immerse
                  myself in collaborative environments, tackle practical
                  challenges, and continue to grow as part of a team. With my
                  enthusiasm for learning and my determination to deliver
                  quality work, I’m excited to begin this new chapter in my
                  career.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="soft" className="w-full">
              <div>
                <h3 className="text-[36px] ">
                  <span className="text-accent"> Soft</span> Skills
                </h3>
                <p>
                  As a developer, I bring a blend of passion, adaptability, and
                  a problem-solving mindset to everything I do. I am a quick
                  learner, always eager to stay ahead of the curve and embrace
                  new tools, technologies, and ideas. Being open-minded allows
                  me to approach challenges creatively and explore innovative
                  solutions. As a team player, I thrive in collaborative
                  environments, valuing clear communication and shared goals to
                  ensure efficient workflows and outstanding results.
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
