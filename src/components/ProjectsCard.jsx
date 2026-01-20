function ProjectsCard({ projects, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col text-center mx-auto mt-5 mb-5 rounded-md border border-white w-full hover:scale-105 transition-transform duration-300 hover:cursor-pointer lg:w-xl"
    >
      <img
        className="rounded-t-md h-full"
        src={projects.img}
        alt={projects.alt}
      />
      <h2 className="font-bold">{projects.name}</h2>
      <p className="text-justify p-2">{projects.description}</p>
    </div>
  );
}

export default ProjectsCard;
