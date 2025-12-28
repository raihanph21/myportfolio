import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="flex flex-col items-center bg-zinc-950 pt-5 pb-3">
      <div className="flex gap-2 mb-1">
        <FaGithub size={20} />
        <FaLinkedin size={20} />
        <MdOutlineEmail size={20} />
      </div>
      <p>Raihan 2025</p>
    </div>
  );
}

export default Footer;
