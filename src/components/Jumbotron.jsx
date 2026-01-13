import imageJumbotron from "../assets/RMI_0895.JPG";
import cv from "../assets/CV.pdf";
import Squares from "./Squares";

function Jumbotron() {
  return (
    <div className="w-full relative overflow-hidden pb-50">
      <div className="absolute z-0 inset-0">
        <Squares size={35} speed={0.6} />
      </div>
      <div className="relative flex m-auto mt-35 p-3 w-4xl border border-transparent rounded-md hover:border-white transition-color duration-700 bg-black">
        <img
          src={imageJumbotron}
          alt="gambar profil"
          className="size-56 object-cover rounded-full"
        />
        <div className="flex flex-col self-center pl-5">
          <h1 className="text-4xl font-bold">Muhammad Raihan</h1>
          <p className="text-justify pt-3">
            I’m a Computer Science graduate who is interested in frontend
            development and building clean, responsive user interfaces. I mainly
            work with HTML, CSS, Tailwind, JavaScript, React, and I’m currently
            continuing to learn modern web tools and best practices through
            personal projects and self-study.
          </p>
          <div className="flex justify-between mt-3 [&_a]:p-1 text-center [&_a]:bg-zinc-900 [&_a]:border [&_a]:rounded-sm [&_a]:border-white [&_a]:w-3xs [&_a]:hover:bg-[#242424] [&_a]:hover:cursor-pointer">
            <a href={cv} target="_blank">
              CV
            </a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
