import React, { useContext, useState } from "react";
import { FavContext } from "../../context/FavContext";
import { Reorder } from "framer-motion";
import styles from "./Hunts.module.css";

export default function Hunts() {
  const { favMonster } = useContext(FavContext);
  const [items, setItems] = useState(
    favMonster.map((monster) => ({ ...monster, count: 0 }))
  );

  function count(id) {
    setItems((prevItems) =>
      prevItems.map((monster) =>
        monster.id === id ? { ...monster, count: monster.count + 1 } : monster
      )
    );
  }

  return (
    <section className={styles.huntSection}>
      <div className={styles.bubbleAnimation}>
        <div className={styles.bubble_sm_1}></div>
        <div className={styles.bubble_md_1}></div>
        <div className={styles.bubble_sm_2}></div>
        <div className={styles.bubble_sm_3}></div>
        <div className={styles.bubble_lg_1}></div>
        <div className={styles.bubble_md_2}></div>
      </div>
      <div className={styles.huntContainer}>
        <h2>Monster to Hunt</h2>
        <p>
          <i>Reorder as you like</i>
          <span>
            <i className="fa-solid fa-arrows-up-down"></i>
          </span>
        </p>
        <Reorder.Group axis="y" values={items} onReorder={setItems}>
          <ul>
            {items.map((monster) => (
              <Reorder.Item key={monster.id} value={monster}>
                <li>
                  <span className={styles.spanName}>{monster.name}</span>
                  <span className={styles.spanLocation}>
                    | Location: {monster.locations[0].name} |{" "}
                  </span>
                  <span
                    className={styles.spanHunted}
                    onClick={() => count(monster.id)}
                  >
                    Hunted: {monster.count}
                  </span>
                </li>
              </Reorder.Item>
            ))}
          </ul>
        </Reorder.Group>
      </div>
    </section>
  );
}

// monster und hunts in local storage speichern damit beim refreshen kein reset entsteht
