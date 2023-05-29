import { useEffect, useState } from "react";
import Header from "../components/Header";
import MediaList from "../components/MediaList";

function HomePage({ media }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const mediaBackdrop = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${media[activeMediaIndex].backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    const sliderTimer = setTimeout(() => {
      if (activeMediaIndex === media.length - 1) {
        setActiveMediaIndex(0);
      } else {
        setActiveMediaIndex(activeMediaIndex + 1);
      }
    }, 15000);

    return () => clearTimeout(sliderTimer);
  }, [activeMediaIndex]);

  return (
    <div className="relative overflow-x-hidden flex flex-col">
      <div
        className="h-screen absolute inset-y-0 right-0 w-4/5 -z-10 duration-500"
        style={mediaBackdrop}
      ></div>
      <div className="h-screen absolute inset-0 bg-gradient-to-b from-primary from-10% via-transparent to-primary -z-10"></div>

      <div className="mb-4 min-h-screen flex flex-col justify-between bg-gradient-to-r from-primary from-30% via-transparent to-trasparent">
        <Header />
        <div className="flex-1 flex flex-col gap-2 w-2/5 ml-24 mt-20 justify-start">
          <h3 className="text-4xl font-bold tracking-tighter">
            {media[activeMediaIndex].title}
          </h3>
          <p className="mt-4">{media[activeMediaIndex].overview}</p>
        </div>

        <MediaList media={media} />
      </div>

      <div className="flex flex-col gap-20 my-20">
        <MediaList media={media} />
        <MediaList media={media} />
        <MediaList media={media} />
      </div>
    </div>
  );
}

export default HomePage;
