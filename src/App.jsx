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
      github: "#",
      demo: "https://bpakm.uii.ac.id/",
      description:
        "This was a paid group project to rebuild the BPAKM UII website. The project was developed using WordPress by a team of four members, including myself, with each person responsible for building two to three pages. Throughout the process, we ensured that the design and features closely matched the previous website, that the site was fully mobile-responsive, and that all BPAKM UII requirements were met.",
    },
    {
      id: 2,
      img: {},
      alt: "Thumbnail Mini LMS",
      name: "Mini LMS",
      github: "https://github.com/RezaPahlevi1/lms-course",
      demo: "#",
      description:
        "An interactive web-based platform designed to organize and present educational content in a structured way. Users can discover learning programs, review educator information, and access course materials through a clean and intuitive interface, reflecting the essential features of a learning management system.",
    },
    {
      id: 3,
      img: splitEase,
      alt: "Thumbnail Split Ease",
      name: "Split Ease",
      github: "https://github.com/raihanph21/splitEase",
      demo: "https://split-ease-web-app.vercel.app/",
      description:
        "A web-based application designed to help users split bills with friends by accurately calculating shared expenses. The platform simplifies cost distribution by allowing users to track individual contributions and determine how much each person owes.",
    },
    {
      id: 4,
      img: movieShelf,
      alt: "Thumbnail Movie Shelf",
      name: "Movie Shelf",
      github: "https://github.com/raihanph21/movieShelf",
      demo: "https://movie-shelf-web-app.vercel.app/",
      description:
        "MovieShelf is a web application that allows users to search for movies, rate them, and manage a personal watched list. Users can save movies they have watched, assign ratings based on their preferences, and remove movies from the list when needed, providing a simple and organized way to track and review watched content.",
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
