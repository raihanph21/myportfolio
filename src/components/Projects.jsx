import ProjectsCard from "./ProjectsCard";
import BPAKMUII from "../assets/bpakm.uii.png";

function Projects() {
  return (
    <div id="projects" className="mt-40  bg-zinc-900 p-5 pt-20 pb-20">
      <h3 className="text-center font-bold text-2xl">My Projects</h3>
      <div className="grid grid-cols-2">
        <ProjectsCard
          img={BPAKMUII}
          alt="Thumbnail BPAKM UII"
          name="BPAKM UII"
          deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. At earum consequatur, recusandae perspiciatis soluta hic sequi architecto, cupiditate maxime ipsum nulla necessitatibus ea laboriosam ratione."
        />
        <ProjectsCard
          name="Mini LMS"
          deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo architecto numquam dolores beatae aperiam. Modi, cupiditate quasi vitae mollitia nobis magnam rem iste fuga eveniet quae corporis, unde minus ipsa, maxime fugiat voluptates velit reiciendis!"
        />
      </div>
    </div>
  );
}

export default Projects;
