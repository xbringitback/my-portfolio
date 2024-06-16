import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { FiDownload } from "react-icons/fi";
import { GrLinkNext } from "react-icons/gr";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h2 className="h2 mb-6">
              Hello {`I'm`} <br /> Chris{" "}
              <span className="text-accent"> M.</span>
            </h2>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              aliquid totam itaque voluptatem atque nam voluptates molestiae est
              necessitatibus laboriosam.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="/projects"
                // variant="outline"
                size="lg"
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
}
