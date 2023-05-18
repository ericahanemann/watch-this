import tempPoster from "../assets/temp-home-poster.png";
import Link from "./Link";

function MediaListItem() {
  return (
    <div className="min-w-fit cursor-pointer hover:scale-110 hover:duration-200">
      <Link to="/media">
        <div className="flex flex-col gap-2">
          <img className="w-32" src={tempPoster} />
          <p className="text-sm">Homem Aranha</p>
        </div>
      </Link>
    </div>
  );
}

export default MediaListItem;
