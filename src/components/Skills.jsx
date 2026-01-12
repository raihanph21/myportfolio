import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaWordpress,
  FaGit,
} from "react-icons/fa";

import { IoLogoFigma } from "react-icons/io5";
import { BiLogoGit } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const skillsList = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaJsSquare />,
  <FaBootstrap />,
  <RiTailwindCssFill />,
  <FaReact />,
  <FaGithub />,
  <BiLogoGit />,
  <IoLogoFigma />,
  <FaWordpress />,
];

function Skills() {
  const renderSkills = skillsList.map((x) => x);

  return (
    <div
      id="skills"
      className="flex justify-between items-center mt-20 mb-20 p-20"
    >
      <div className="w-xl">
        <h3 className="font-bold text-3xl mb-5">My Tools and Skills</h3>
        <p>These are the tools i have used to build web applications.</p>
      </div>
      <div className="grid gap-10 grid-cols-5 w-2xl *:size-20">
        {renderSkills}
      </div>
    </div>
  );
}

export default Skills;
