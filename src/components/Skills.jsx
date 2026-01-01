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
    <div
      id="skills"
      className="flex justify-between items-center mt-20 mb-20 p-20"
    >
      <div>
        <h3 className="font-bold text-2xl mb-5">My Tools and Skills</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          blanditiis laborum ipsam placeat, similique neque.
        </p>
      </div>
      <div className="grid gap-10 grid-cols-5">
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
