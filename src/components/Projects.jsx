import ProjectsCard from "./ProjectsCard";
import BPAKMUII from "../assets/bpakm.uii.png";
import splitEase from "../assets/splitEase.png";
import movieShelf from "../assets/MovieShelf.png";
import LetterGlitch from "./Squares";

function Projects() {
  return (
    //bg-gradient-to-r from-white to-zinc-900 to-50%
    <div id="projects" className="p-5 pt-20 pb-20">
      <h3 className="text-center font-bold text-3xl mb-10">My Projects</h3>
      <div className="grid grid-cols-2">
        <ProjectsCard
          img={BPAKMUII}
          alt="Thumbnail BPAKM UII"
          name="BPAKM UII"
          deskripsi="This was a paid group project to rebuild the BPAKM UII website. The project was developed using WordPress by a team of four members, including myself, with each person responsible for building two to three pages. Throughout the process, we ensured that the design and features closely matched the previous website, that the site was fully mobile-responsive, and that all BPAKM UII requirements were met."
        />
        <ProjectsCard
          img="sad"
          name="Mini LMS"
          deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo architecto numquam dolores beatae aperiam. Modi, cupiditate quasi vitae mollitia nobis magnam rem iste fuga eveniet quae corporis, unde minus ipsa, maxime fugiat voluptates velit reiciendis!"
        />
        <ProjectsCard
          img={splitEase}
          name="Split Ease"
          deskripsi="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga quo non ipsa laboriosam eligendi inventore accusantium quidem tenetur officia, dignissimos velit provident dolorum ipsum cumque facere harum? Deleniti quisquam rerum pariatur ex vitae mollitia a ut veritatis fuga voluptas."
        />
        <ProjectsCard
          img={movieShelf}
          name="Movie Shelf"
          deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugit eius perferendis repellendus iste quos quam omnis vel praesentium magni asperiores pariatur, eos laboriosam nam necessitatibus recusandae accusamus veritatis consequuntur animi porro! Consequatur magni corrupti aliquid sapiente rerum doloribus distinctio, corporis ea tempore, ullam similique odio in voluptatum aliquam provident autem, tenetur minima libero culpa reprehenderit ducimus."
        />
      </div>
    </div>
  );
}

export default Projects;
