import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";

import { IoLogoFigma } from "react-icons/io5";
import { BiLogoGit } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {
  return (
    <div id="skills" className="flex flex-col items-center mt-50 mb-20">
      <h3 className="font-bold text-2xl mb-5">My Expertise</h3>
      <div className="grid gap-10 grid-cols-4">
        <FaHtml5 size={100} />
        <FaCss3Alt size={100} />
        <FaJsSquare size={100} />
        <FaBootstrap size={100} />
        <RiTailwindCssFill size={100} />
        <FaReact size={100} />
        <FaGithub size={100} />
        <BiLogoGit size={100} />
        <IoLogoFigma size={100} />
        <FaWordpress size={100} />
      </div>
    </div>
  );
}

export default Skills;
