import DecryptedText from "./DecryptedText";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const listNav = ["projects", "skills", "education", "contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const listNavKanan = listNav.map((x, index) => (
    <li key={index}>
      <a href={`#${x}`}>{x.charAt(0).toUpperCase() + x.slice(1)}</a>
    </li>
  ));

  return (
    <nav
      id="nav"
      className="w-full bg-black text-white p-7 flex justify-between sticky top-0 font-bold z-1 opacity-95"
    >
      <ul
        className="flex gap-6 cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
      >
        <DecryptedText text="Muhammad Raihan" />
      </ul>

      {/* hamburger button */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-50">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* menu mobile */}
      <ul
        className={`gap-6 lg:ml-auto fixed left-0 mt-7 p-7 flex flex-col lg:flex-row w-full lg:w-auto lg:static lg:mt-0 lg:p-0 bg-black/80 ${isOpen ? "flex" : "hidden lg:flex"}`}
      >
        {listNavKanan}
      </ul>
    </nav>
  );
}

export default Navbar;
