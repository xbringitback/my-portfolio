"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { Scrollarea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            <TabsTrigger value="currently">
              What I`m Currently doing?
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
                <h3 className="text-[36px] ">I`m Chris M. </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum officia rerum enim eligendi maxime dignissimos cum
                  accusantium eius tempore, consequatur alias molestias quae
                  quod explicabo.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div>
                <h3 className="text-[36px] ">My Experience</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore, praesentium sed est assumenda neque corporis labore
                  voluptate necessitatibus, perferendis iusto blanditiis
                  tenetur. Aperiam, molestiae doloribus.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="soft" className="w-full">
              <div>
                <h3 className="text-[36px] ">Soft Skills</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate voluptatum obcaecati quam saepe, maiores voluptas
                  doloribus laudantium, eveniet hic reprehenderit qui sequi
                  consectetur autem. Quo.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="currently" className="w-full">
              <div>
                <h3 className="text-[36px]">What am I doing at the moment?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam quisquam accusamus, ex itaque porro corporis
                  voluptates? Iste labore ducimus laudantium facere eaque, quis
                  dicta laborum.
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

{
  /* <div>
<div>About me</div>
<div>Experience</div>
<div>Soft Skills</div>
<div>What I`m Currently doing?</div>
</div> */
}
