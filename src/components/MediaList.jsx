import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import MediaListItem from "./MediaListItem";

function MediaList() {
  return (
    <div className="flex-1 mx-6 flex flex-col gap-3">
      <h2 className="text-lg font-bold">Trending now</h2>
      <div className="relative flex gap-4">
        <button className="absolute z-10 top-1/2 -left-4 transform -translate-y-1/2 bg-secondary text-primary p-1 rounded-full text-3xl hover:bg-highlights">
          <GoChevronLeft />
        </button>

        <MediaListItem />
        <MediaListItem />
        <MediaListItem />
        <MediaListItem />
        <MediaListItem />
        <MediaListItem />
        <MediaListItem />
        <MediaListItem />
        <MediaListItem />
        <MediaListItem />
        <MediaListItem />
        <MediaListItem />

        <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-secondary text-primary p-1 rounded-full text-3xl hover:bg-highlights">
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
}

export default MediaList;
