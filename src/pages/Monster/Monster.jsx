import React, { useEffect, useState } from "react";
import MonsterCard from "../../components/MonsterCard/MonsterCard";
import styles from "./Monster.module.css";

export default function Monster() {
  const [monsterData, setMonsterData] = useState([]);
  const [monster, setMonster] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMonsterData() {
      try {
        const response = await fetch("https://mhw-db.com/monsters");
        const data = await response.json();
        setMonsterData(data);
        console.log({ monsterData });
      } catch (error) {
        console.error("error:", error);
      } finally {
        setIsLoading(false)
      }
    }
    fetchMonsterData();
  }, []);

  return (
    <>
      {isLoading ? (<p>Loading...</p>) : (
        <main>
          <section className={styles.sidebar_list}>
            <ul>
              {monsterData.map((mon) => (
                  <li key={mon.id} onClick={()=>setMonster(mon)}>
                    { mon.species === "herbivore" 
                    ? <><i className="fa-brands fa-pagelines"></i> {mon.name} </>
                    : <><i className="fa-solid fa-drumstick-bite"></i> {mon.name} </>}
                    </li>
              ))}
            </ul>
          </section>
          <MonsterCard monster={monster}/>
        </main>
      )}
    </>
  );
}
