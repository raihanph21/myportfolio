function Education() {
  return (
    <div
      id="education"
      className="flex justify-between items-center bg-zinc-900 p-20"
    >
      <div>
        <h3 className="text-2xl font-bold mb-5">My Education</h3>
        <ul>
          <li>Universitas Islam Indonesia</li>
          <li>Bachelor of Infomatics </li>
          <li>Sept 2020 - Nov 2024</li>
          <li>GPA: 3.60</li>
        </ul>
      </div>
      <div className="w-2xl grid gap-10">
        <p>
          I graduated from Universitas Islam Indonesia with a degree in
          Informatics. During my studies, I built a strong foundation in web
          development, learning core concepts of programming, design, and modern
          web technologies while working on various academic works.
        </p>
        <p className="">
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
