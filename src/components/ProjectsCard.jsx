function ProjectsCard({ projects }) {
  return (
    <div className="flex flex-col text-center mx-auto mt-5 mb-5 rounded-md border border-white w-xl hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
      <img className="rounded-t-md" src={projects.img} alt={projects.alt} />
      <h2 className="font-bold">{projects.name}</h2>
      <p className="text-justify p-2">{projects.description}</p>
    </div>
  );
}

export default ProjectsCard;
