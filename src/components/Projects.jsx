import ProjectsCard from "./ProjectsCard";
import BPAKMUII from "../assets/bpakm.uii.png";

function Projects() {
  return (
    //bg-gradient-to-r from-white to-zinc-900 to-50%
    <div id="projects" className="mt-40  bg-zinc-900 p-5 pt-20 pb-20">
      <h3 className="text-center font-bold text-3xl mb-10">My Projects</h3>
      <div className="grid grid-cols-2">
        <ProjectsCard
          img={BPAKMUII}
          alt="Thumbnail BPAKM UII"
          name="BPAKM UII"
          deskripsi="This was a paid group project to rebuild the BPAKM UII website. The project was developed using WordPress by a team of four members, including myself, with each person responsible for building two to three pages. Throughout the process, we ensured that the design and features closely matched the previous website, that the site was fully mobile-responsive, and that all BPAKM UII requirements were met."
        />
        <ProjectsCard
          img={BPAKMUII}
          name="Mini LMS"
          deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo architecto numquam dolores beatae aperiam. Modi, cupiditate quasi vitae mollitia nobis magnam rem iste fuga eveniet quae corporis, unde minus ipsa, maxime fugiat voluptates velit reiciendis!"
        />
      </div>
    </div>
  );
}

export default Projects;
