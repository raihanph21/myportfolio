import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaWordpress,
  FaGit,
  FaFigma,
} from "react-icons/fa";

import { BiLogoGit } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const skillsList = [
  { name: "HTML", icon: <FaHtml5 />, color: "#f06529" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#2965f1" },
  { name: "Javascript", icon: <FaJsSquare />, color: "#f0db4f" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "	#8312fa" },
  { name: "Tailwind", icon: <RiTailwindCssFill />, color: "#3490dc" },
  { name: "React", icon: <FaReact />, color: "#61dbfb" },
  { name: "Github", icon: <FaGithub /> },
  { name: "Git", icon: <BiLogoGit />, color: "#DA3A32" },
  { name: "Figma", icon: <FaFigma />, color: "#ff58ae" },
  { name: "Wordpress", icon: <FaWordpress />, color: "#21759b" },
];

function Skills() {
  const renderSkills = skillsList.map((skills, index) => (
    <div
      key={index}
      style={{ "--skill-color": skills.color }}
      className="flex flex-col items-center border-2 border-(--skill-color) lg:border-transparent rounded-xl hover:border-(--skill-color) transition-color duration-700 p-3"
    >
      <div style={{ color: "var(--skill-color)" }} className="*:size-20">
        {skills.icon}
      </div>
      <p className="p-1 font-bold" style={{ color: "var(--skill-color)" }}>
        {skills.name}
      </p>
    </div>
  ));

  return (
    <div
      id="skills"
      className="text-center p-5 lg:text-left lg:flex lg:justify-between lg:items-center lg:p-20"
      // className="flex flex-col justify-between items-center mt-20 mb-20 p-20 w-full"
    >
      <div className="w-full lg:w-2xl">
        <h3 className="font-bold text-3xl mb-5">My Tools and Skills</h3>
        <p>These are the tools i have used to build web applications.</p>
      </div>
      <div className="mt-15 grid grid-cols-2 gap-5 mx-auto lg:grid-cols-5 lg:w-2xl lg:gap-10">
        {renderSkills}
      </div>
    </div>
  );
}

export default Skills;
