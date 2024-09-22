import React, { useContext, useState } from "react";
import { FavContext } from "../../context/FavContext";
import { Reorder } from "framer-motion";
import styles from "./Hunts.module.css";

export default function Hunts() {
  const { favMonster } = useContext(FavContext);
  const [items, setItems] = useState(favMonster);
  const [count, setCount] = useState(0);

  return (
    <section className={styles.huntSection}>
      <div className={styles.huntContainer}>
        <h2>Monster to Hunt</h2>
        <p><i>Reorder as you like</i><span><i className="fa-solid fa-arrows-up-down"></i></span></p>
        <Reorder.Group axis="y" values={items} onReorder={setItems}>
          <ul>
            {items.map((monster) => (
              <Reorder.Item key={monster.id} value={monster}>
                <li>
                  {monster.name}{" "}
                  <span> | Location: {monster.locations[0].name} |</span>
                  <span className={styles.huntedCount} onClick={()=>setCount(count+1)}>Hunted: {count}</span>
                </li>
              </Reorder.Item>
            ))}
          </ul>
        </Reorder.Group>
      </div>
    </section>
  );
}
