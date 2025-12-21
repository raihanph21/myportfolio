import imageJumbotron from "../assets/RMI_0895.JPG";

function Jumbotron() {
  return (
    <div className="flex m-auto mt-35 w-4xl">
      <img
        src={imageJumbotron}
        alt="gambar profil"
        className="size-56 object-cover rounded-full"
      />
      <div className="flex flex-col self-center ps-5">
        <h1 className="text-4xl font-bold">Muhammad Raihan</h1>
        <p className="text-justify mt-3">
          I’m a Computer Science graduate who is interested in frontend
          development and building clean, responsive user interfaces. I mainly
          work with HTML, CSS, Tailwind, JavaScript, React, and I’m currently
          continuing to learn modern web tools and best practices through
          personal projects and self-study.
        </p>
        <div className="flex justify-between">
          <button className="border rounded-sm border-white bg-zinc-700 mt-3 w-3xs hover:bg-[#242424] hover:cursor-pointer p-1">
            CV
          </button>
          <button className="border rounded-sm border-white bg-zinc-700 mt-3 w-3xs hover:bg-[#242424] hover:cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
