function ProjectsCard({ name, deskripsi, img, isiButton, alt }) {
  return (
    <div className="flex flex-col text-center mx-auto mt-5 mb-5 rounded-xl border border-white w-xl">
      <img src={img} alt={alt} />
      <h2 className="font-bold">{name}</h2>
      <p>{deskripsi}</p>
      <button>{isiButton}</button>
    </div>
  );
}

export default ProjectsCard;
