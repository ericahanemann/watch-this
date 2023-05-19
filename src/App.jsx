import Header from "./components/Header";
import Route from "./components/Route";
import HomePage from "./pages/HomePage";
import ListsPage from "./pages/ListsPage";
import MediaPage from "./pages/MediaPage";
import fetchPopularMedia from "./api";
import { useEffect, useState } from "react";

function App() {
  const [popularMedia, setPopularMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetchPopularMedia();

    setPopularMedia(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Route path="/">
        <HomePage media={popularMedia} />
      </Route>
      <Route path="/media">
        <MediaPage />
      </Route>
      <Route path="/my-lists">
        <ListsPage />
      </Route>
    </div>
  );
}

export default App;
