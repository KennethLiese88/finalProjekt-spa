import React, { useState, useEffect } from 'react';
import styles from "./MonsterCard.module.css"

export default function MonsterCard({monster}) {
    const [ favMonster, setFavMonster] = useState([]);
    const [ favToggle, setFavToggle] = useState(false);

    function isFav() {
        return favMonster.some(mon => mon.id === monster.id);
    }

    useEffect(() => {
        setFavToggle(isFav());
    }, [favMonster, monster.id]);

    function toggleFavorite() {
        if (favToggle) {
          setFavMonster(prev => prev.filter(mon => mon.id !== monster.id));
          setFavToggle(false);
        } else {
            setFavMonster(prev => [...prev, monster]);
            setFavToggle(true);
        }
        console.log(favMonster);
      }
    

  return (
    <section className={styles.card_wrapper}>
        <h2>{monster.name}</h2>
        { favToggle 
        ? <i onClick={toggleFavorite} className="fa-solid fa-star" style={{color:"yellow"}}></i>
        : <i onClick={toggleFavorite} className="fa-regular fa-star"></i>}
        <div className={styles.monster_img}>
            <img src="https://www.monsterhunter.com/world/sp/images/top/img_overview_01.jpg" alt="monster image" />
        </div>
        <div  className={styles.monster_stats}>

        </div>
        <div  className={styles.monster_description}>{monster.description}</div>
        <p>Favoritenliste: {favMonster.map(mon => mon.name).join(', ')}</p>
    </section>
  )
}
