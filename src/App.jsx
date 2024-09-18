import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Monster from "./pages/Monster/Monster";
import Weapons from "./pages/Weapons/Weapons";
import Items from "./pages/Items/Items";
import Hunts from "./pages/Hunts/Hunts";
import Comments from "./pages/Comments/Comments";
import NotFound from "./pages/NotFound/NotFound";
import FavContextProvider from "./context/FavContext";

function App() {
  return (
    <>
      <FavContextProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/monster" element={<Monster />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/items" element={<Items />} />
            <Route path="/hunts" element={<Hunts />} />
            <Route path="/comments" element={<Comments />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FavContextProvider>
    </>
  );
}

export default App;
