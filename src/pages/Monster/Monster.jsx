import React, { useEffect, useState, useContext } from "react";
import MonsterCard from "../../components/MonsterCard/MonsterCard";
import styles from "./Monster.module.css";
import { FavContext } from "../../context/FavContext"; 

export default function Monster() {
  const [monsterData, setMonsterData] = useState([]);
  const [monster, setMonster] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { favMonster, toggleFavorite } = useContext(FavContext);

  useEffect(() => {
    async function fetchMonsterData() {
      try {
        const response = await fetch("https://mhw-db.com/monsters");
        const data = await response.json();
        setMonsterData(data);
        console.log({data});
      } catch (error) {
        console.error("error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMonsterData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p className={styles.isLoading}><i className="fa-solid fa-gear fa-spin"></i> Loading...</p>
      ) : (
        <main>
          <section className={styles.sidebar_list}>
            <ul>
              {monsterData.map((mon) => {
                const isFav = favMonster.some((fav) => fav.id === mon.id);

                return (
                  <li key={mon.id} onClick={() => setMonster(mon)}>
                    {mon.species === "herbivore" ? (
                      <i className="fa-brands fa-pagelines"></i>
                    ) : (
                      <i className="fa-solid fa-drumstick-bite"></i>
                    )}
                    <p>{mon.name}</p>
                    <i
                      onClick={(e) => {
                        // e.stopPropagation();
                        toggleFavorite(mon);
                      }}
                      className={isFav ? "fa-solid fa-star" : "fa-regular fa-star"}
                      style={{ color: isFav ? "yellow" : "inherit", marginLeft: '10px' }}
                    ></i>
                  </li>
                );
              })}
            </ul>
          </section>
          <MonsterCard monster={monster} />
        </main>
      )}
    </>
  );
}