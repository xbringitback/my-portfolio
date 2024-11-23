import About from "./About";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Chris M. Full-Stack Developer",
};

const AboutPage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default AboutPage;
