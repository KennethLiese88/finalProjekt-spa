import { createContext, useState } from "react";

export const FavContext = createContext();

export default function FavContextProvider({ children }) {
  const [favMonster, setFavMonster] = useState([]);

  function isFav(monster) {
    return favMonster.some((mon) => mon.id === monster.id);
  }

  function toggleFavorite(monster) {
    if (isFav(monster)) {
      setFavMonster((prev) => prev.filter((mon) => mon.id !== monster.id));
    } else {
      setFavMonster((prev) => [...prev, monster]);
    }
  }

  return (
    <FavContext.Provider value={{ favMonster, toggleFavorite, isFav }}>
      {children}
    </FavContext.Provider>
  );
}
