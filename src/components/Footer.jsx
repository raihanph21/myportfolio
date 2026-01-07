import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="flex flex-col items-center bg-zinc-950 pt-5 pb-3">
      <div className="flex gap-2 mb-1">
        <a href="https://github.com/raihanph21" target="_blank">
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammadraihanph21/"
          target="_blank"
        >
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:m.rhn.ph@gmail.com" target="_blank">
          <MdOutlineEmail size={20} />
        </a>
      </div>
      <p>Raihan 2025</p>
    </div>
  );
}

export default Footer;
