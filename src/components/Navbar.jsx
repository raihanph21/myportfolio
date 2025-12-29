const listNav = ["projects", "skills", "education", "resume", "contact"];

function Navbar() {
  const listNavKanan = listNav.map((x) => <li>{x}</li>);

  return (
    <nav className="w-full bg-zinc-700 text-white p-5 flex justify-between sticky top-0 font-bold">
      <ul className="flex gap-6">
        <li>Raihan</li>
      </ul>
      <ul className="flex gap-6 ml-auto me-3">{listNavKanan}</ul>
    </nav>
  );
}

export default Navbar;
