import tempPoster from "../assets/temp-home-poster.png";

function MediaListItem() {
  return (
    <div className="flex flex-col gap-2 min-w-fit hover:scale-110 hover:duration-200">
        <img className="w-32" src={tempPoster} />
        <p className="text-sm">Homem Aranha</p>
    </div>
  );
}

export default MediaListItem;
