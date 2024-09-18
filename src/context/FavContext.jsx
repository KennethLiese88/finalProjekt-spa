import { createContext, useState } from "react";

export const FavContext = createContext();

export default function FavContextProvider({children}) {
    const [ favMonster, setFavMonster] = useState([]);
    

    return (
        <FavContext.Provider value={{favMonster, setFavMonster}}>
            {children}
        </FavContext.Provider>
    )
}