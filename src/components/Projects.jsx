import ProjectsCard from "./ProjectsCard";

function Projects() {
  return (
    <div id="projects" className="mt-40  bg-zinc-900 p-5 pt-20 pb-20">
      <h3 className="text-center font-bold text-2xl">My Projects</h3>
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
    </div>
  );
}

export default Projects;
