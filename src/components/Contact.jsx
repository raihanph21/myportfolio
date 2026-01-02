import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div id="contact" className="flex justify-center bg-zinc-950 pt-10 pb-10">
      <div>
        <h4 className="text-2xl font-bold mb-5 me-15">Get In Touch</h4>
        <ul className="grid gap-2">
          <li>
            <a href="">
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <MdOutlineEmail size={20} />
            </a>
          </li>
        </ul>
      </div>
      <form className="flex flex-col gap-5 [&_input]:border [&_input]:rounded-sm [&_input]:p-2 [&_input]:w-xl">
        <input type="text" name="Name" placeholder="Name..." />
        <input type="Email" name="Email" placeholder="example@gmail.com" />
        <input type="text" name="Message" placeholder="Type your message..." />
      </form>
    </div>
  );
}

export default Contact;
