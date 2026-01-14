import ProjectsCard from "./ProjectsCard";

function Projects({ projects }) {
  return (
    //bg-gradient-to-r from-white to-zinc-900 to-50%
    <div id="projects" className="p-5 pt-20 pb-20">
      <h3 className="text-center font-bold text-3xl mb-10">My Projects</h3>
      <div className="grid grid-cols-2">
        {projects.map((x) => (
          <ProjectsCard projects={x} key={x.id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
