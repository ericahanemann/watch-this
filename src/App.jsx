import Header from "./components/Header";
import Route from "./components/Route";
import HomePage from "./pages/HomePage";
import ListsPage from "./pages/ListsPage";
import MediaPage from "./pages/MediaPage";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Route path="/">
        <HomePage />
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
