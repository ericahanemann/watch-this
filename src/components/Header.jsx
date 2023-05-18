import { BiSearch } from "react-icons/bi";
import Link from "./Link";
import logo from "../assets/watchthis-logo.png";

function Header() {
  const links = [
    { label: "Home", path: "/" },
    { label: "My Lists", path: "/my-lists" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className="flex justify-between items-center h-20 mx-6">
      <Link to="/"><img className="h-12" src={logo} /></Link>

      <div className="flex gap-8">
        {renderedLinks}

        <form className="flex gap-2">
          <input
            className="bg-primary text-secondary border border-secondary outline-none rounded-md p-2 text-sm"
            type="text"
            placeholder="Título, Autor, Diretor"
          />

          <button
            className="bg-secondary text-primary p-1 rounded-md text-2xl hover:bg-highlights"
            type="submit"
          >
            <BiSearch />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
