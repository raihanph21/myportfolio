const listNav = ["projects", "skills", "education", "contact"];

function Navbar() {
  const listNavKanan = listNav.map((x) => (
    <li>
      <a href={`#${x}`}>{x.charAt(0).toUpperCase() + x.slice(1)}</a>
    </li>
  ));
  console.log(listNavKanan);

  return (
    <nav
      id="nav"
      className="w-full bg-zinc-900 text-white p-5 flex justify-between sticky top-0 font-bold z-1"
    >
      <ul className="flex gap-6 cursor-pointer">
        <li onClick={() => window.scrollTo(0, 0)}>Raihan</li>
      </ul>
      <ul className="flex gap-6 ml-auto me-3">{listNavKanan}</ul>
    </nav>
  );
}

export default Navbar;
