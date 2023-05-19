import Link from "./Link";

function MediaListItem({ posterPath, title }) {
  const posterUrl = `https://image.tmdb.org/t/p/original${posterPath}`;

  return (
    <div className="min-w-fit cursor-pointer hover:scale-110 hover:duration-200">
      <Link to="/media">
        <div className="flex flex-col gap-2 w-28 overflow-hidden">
          <img className="w-28" src={posterUrl} />
          <p className="text-sm whitespace-nowrap">{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default MediaListItem;
