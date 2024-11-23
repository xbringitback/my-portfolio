import Projects from "./Projects";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Chris M. Full-Stack Developer",
};

const ProjectsPage = () => {
  return (
    <div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
