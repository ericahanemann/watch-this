import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import MediaListItem from "./MediaListItem";
import { useState } from "react";

function MediaList({ media }) {
  const [startIndex, setStartIndex] = useState(0);
  const displayedMedia = media.slice(startIndex, startIndex + 11);

  const renderedMedia = displayedMedia.map((mediaItem) => {
    return (
      <MediaListItem
      onMouse
        key={mediaItem.id}
        posterPath={mediaItem.poster_path}
        title={mediaItem.title}
      />
    );
  });

  const handleLeftArrowClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (startIndex < media.length - displayedMedia.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="h-fit mx-6 mb-2 flex flex-col gap-3">
      <h2 className="text-lg font-bold">Trending now</h2>
      <div className="relative flex gap-5 group mx-auto">
        <button className="absolute hidden group-hover:block z-10 top-1/2 -left-4 transform -translate-y-1/2 bg-secondary text-primary shadow-black p-1 rounded-full text-3xl hover:bg-highlights">
          <GoChevronLeft onClick={handleLeftArrowClick} />
        </button>

        {renderedMedia}

        <button className="absolute hidden group-hover:block top-1/2 -right-4 transform -translate-y-1/2 bg-secondary text-primary shadow-black p-1 rounded-full text-3xl hover:bg-highlights">
          <GoChevronRight onClick={handleRightArrowClick} />
        </button>
      </div>
    </div>
  );
}

export default MediaList;
