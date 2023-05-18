import { BiSearch } from "react-icons/bi";
import logo from "../assets/watchthis-logo.png";

function Header() {
  return (
    <header className="flex justify-between items-center h-20 mx-6">
      <img className="h-12" src={logo} />

      <div className="flex gap-8">
      <a className="self-center hover:text-highlights" href="#">
          Início
        </a>
        <a className="self-center hover:text-highlights" href="#">
          Minhas listas
        </a>

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
