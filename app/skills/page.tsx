import Skills from "./Skills";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Chris M. Full-Stack Developer",
};

const SkillsPage = () => {
  return (
    <div>
      <Skills />
    </div>
  );
};

export default SkillsPage;
