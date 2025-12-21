function Navbar() {
  return (
    <nav className="w-screen bg-zinc-700 text-white p-5 flex justify-between sticky top-0 font-bold">
      <ul className="flex gap-6">
        <li>Raihan</li>
      </ul>
      <ul className="flex gap-6 ml-auto me-3">
        <li>
          <a href="#">Me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Education</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
