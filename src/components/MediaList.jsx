import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import MediaListItem from "./MediaListItem";

function MediaList({ media }) {

  const renderedMedia = media.map((mediaItem) => {
    return (
      <MediaListItem
        key={mediaItem.id}
        posterPath={mediaItem.poster_path}
        title={mediaItem.title}
      />
    );
  });

  return (
    <div className="flex-1 mx-6 flex flex-col gap-3">
      <h2 className="text-lg font-bold">Trending now</h2>
      <div className="relative flex gap-5 group">
        <button className="absolute hidden group-hover:block z-10 top-1/2 -left-4 transform -translate-y-1/2 bg-secondary text-primary shadow-black p-1 rounded-full text-3xl hover:bg-highlights">
          <GoChevronLeft />
        </button>

        {renderedMedia}

        <button className="absolute hidden group-hover:block top-1/2 -right-4 transform -translate-y-1/2 bg-secondary text-primary shadow-black p-1 rounded-full text-3xl hover:bg-highlights">
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
}

export default MediaList;
