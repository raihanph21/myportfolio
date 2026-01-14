import "./index.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import BPAKMUII from "./assets/bpakm-uii.png";
import splitEase from "./assets/SplitEase.png";
import movieShelf from "./assets/MovieShelf.png";

function App() {
  const projects = [
    {
      id: 1,
      img: BPAKMUII,
      alt: "Thumbnail BPAKM UII",
      name: "BPAKM UII",
      description:
        "This was a paid group project to rebuild the BPAKM UII website. The project was developed using WordPress by a team of four members, including myself, with each person responsible for building two to three pages. Throughout the process, we ensured that the design and features closely matched the previous website, that the site was fully mobile-responsive, and that all BPAKM UII requirements were met.",
    },
    {
      id: 2,
      img: BPAKMUII,
      alt: "Thumbnail Mini LMS",
      name: "Mini LMS",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo architecto numquam dolores beatae aperiam. Modi, cupiditate quasi vitae mollitia nobis magnam rem iste fuga eveniet quae corporis, unde minus ipsa, maxime fugiat voluptates velit reiciendis!",
    },
    {
      id: 3,
      img: splitEase,
      alt: "Thumbnail Split Ease",
      name: "Split Ease",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga quo non ipsa laboriosam eligendi inventore accusantium quidem tenetur officia, dignissimos velit provident dolorum ipsum cumque facere harum? Deleniti quisquam rerum pariatur ex vitae mollitia a ut veritatis fuga voluptas.",
    },
    {
      id: 4,
      img: movieShelf,
      alt: "Thumbnail Movie Shelf",
      name: "Movie Shelf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugit eius perferendis repellendus iste quos quam omnis vel praesentium magni asperiores pariatur, eos laboriosam nam necessitatibus recusandae accusamus veritatis consequuntur animi porro! Consequatur magni corrupti aliquid sapiente rerum doloribus distinctio, corporis ea tempore, ullam similique odio in voluptatum aliquam provident autem, tenetur minima libero culpa reprehenderit ducimus.",
    },
  ];
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Projects projects={projects} />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </>
  );
}

export default App;
