import React, { useState, useEffect, useContext } from "react";
import styles from "./MonsterCard.module.css";
import { FavContext } from "../../context/FavContext";
import { imageData } from "../../assets/data/imageData";

export default function MonsterCard({ monster }) {
  const { favMonster, toggleFavorite, isFav } = useContext(FavContext);
  const [favToggle, setFavToggle] = useState(isFav(monster));

  useEffect(() => {
    setFavToggle(isFav(monster));
  }, [favMonster, monster]);

  function checkMonster(name) {
    const found = imageData.find((data) => data.name === name);
    return found ? found.url : "#";
  }

  return (
    <section className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <img src={checkMonster(monster.name)} alt={monster.name} />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h3>{monster.name}</h3>
            <p>{monster.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        {favToggle ? (
          <i
          onClick={() => toggleFavorite(monster)}
          className="fa-solid fa-star"
          style={{ color: "yellow" }}
          ></i>
        ) : (
          <i
          onClick={() => toggleFavorite(monster)}
          className="fa-regular fa-star"
          ></i>
        )}
        <h2>{monster.name}</h2>
        <span> # {monster.type} {monster.species}</span>
        <p>Element: {monster.elements && monster.elements.length > 0 ? monster.elements[0] : "none"}</p>
        <p>Resistance: {monster.resistances && monster.resistances.length > 0 ? monster.resistances[0].element : "none"}</p>
        <p>Weakness: {monster.weaknesses && monster.weaknesses.length > 0 ? monster.weaknesses[0].element : "none"}</p>
        <p>Ailments: {monster.ailments && monster.ailments.length > 0 ? monster.ailments[0].name : "none"}</p>
        <span>{monster.ailments && monster.ailments.length > 0 ? monster.ailments[0].description : "none"}</span>
        <p>Rewards: {monster.rewards && monster.rewards.length > 0 ? monster.rewards[0].item.name : "none"}</p>
        <span>{monster.rewards && monster.rewards.length > 0 ? monster.rewards[0].item.description : "none"}</span>
      </div>
    </section>
  );
}