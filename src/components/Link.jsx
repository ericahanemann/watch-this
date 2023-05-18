import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
  const { navigate, currentPath } = useContext(NavigationContext);
  const linkStyle =
    currentPath === to
      ? "self-center text-highlights"
      : "self-center hover:text-highlights";

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={linkStyle} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
