import About from "./About";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Chris M. - Web Developer",
};

const AboutPage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default AboutPage;
