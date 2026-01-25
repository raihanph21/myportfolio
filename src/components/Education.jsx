function Education() {
  return (
    <div
      id="education"
      // className="flex flex-col items-center bg-black p-20">
      className="p-5 lg:flex lg:justify-around lg:items-center lg:p-20 text-center lg:text-justify "
    >
      <div>
        <h3 className="text-3xl font-bold mb-5 w-full lg:w-2xl">
          My Education
        </h3>
        <ul>
          <li>Universitas Islam Indonesia</li>
          <li>Bachelor of Infomatics </li>
          <li>Sept 2020 - Nov 2024</li>
          <li>GPA: 3.60</li>
        </ul>
      </div>
      <div className="w-full mt-10 p-5 grid gap-5 text-justify border border-white rounded-md hover:border-white transition-color duration-700 lg:gap-10 lg:w-2xl">
        <p>
          <span></span>
          <span></span>I graduated from Universitas Islam Indonesia with a
          degree in Informatics. During my studies, I built a strong foundation
          in web development, learning core concepts of programming, design, and
          modern web technologies while working on various academic works.
        </p>
        <p>
          Through self-learning and hands-on practice, I continued to sharpen my
          skills in building responsive and efficient web applications. This
          journey reflects my growing interest in web development and the skill
          set I’ve developed.
        </p>
      </div>
    </div>
  );
}

export default Education;
