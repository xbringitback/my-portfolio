import Link from "next/link";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

import { GrLinkNext } from "react-icons/gr";

const Home: React.FC = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h2 className="h2 mb-6">
              Hello I&apos;m <br /> Chris{" "}
              <span className="text-accent"> M.</span>
            </h2>
            <p className="max-w-[560px] mb-9 text-white/80">
              I am a Junior Full-Stack Web Developer specializing in front-end
              and back-end development. I strongly believe in continuous
              learning and collaborating with other developers and designers to
              improve myself. I mainly work with technologies like JavaScript,
              React, Next.js and TypeScript.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="/projects"
                className="uppercase flex items-center gap-2 border-[1px] outline-accent border-accent text-white hover:bg-accent hover:text-primary hover:transition-all duration-500 px-6 py-3 rounded-full font-medium bg-transparent group"
              >
                <span>View Projects</span>
                <GrLinkNext className="text-xl text-accent group-hover:text-black duration-500 hover:transition-all" />
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
