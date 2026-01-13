import Squares from "./Squares";

function Education() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="absolute z-0 inset-0">
        <Squares size={35} speed={0.6} />
      </div>
      <div
        id="education"
        className=" relative flex justify-between items-center p-20"
      >
        <div>
          <h3 className="text-3xl font-bold mb-5">My Education</h3>
          <ul>
            <li>Universitas Islam Indonesia</li>
            <li>Bachelor of Infomatics </li>
            <li>Sept 2020 - Nov 2024</li>
            <li>GPA: 3.60</li>
          </ul>
        </div>
        <div className="w-2xl grid gap-10 text-justify p-3 border border-transparent rounded-md hover:border-white transition-color duration-700 bg-black">
          <p>
            I graduated from Universitas Islam Indonesia with a degree in
            Informatics. During my studies, I built a strong foundation in web
            development, learning core concepts of programming, design, and
            modern web technologies while working on various academic works.
          </p>
          <p>
            Through self-learning and hands-on practice, I continued to sharpen
            my skills in building responsive and efficient web applications.
            This journey reflects my growing interest in web development and the
            skill set I’ve developed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
