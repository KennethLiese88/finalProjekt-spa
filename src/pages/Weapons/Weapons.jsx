import React, { useEffect, useState } from "react";
import styles from "./Weapons.module.css";

export default function Weapons() {
  const [weapons, setWeapons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const weaponTypes = [
    "great-sword",
    "long-sword",
    "sword-and-shield",
    "dual-blades",
    "hammer",
    "hunting-horn",
    "lance",
    "gunlance",
    "switch-axe",
    "charge-blade",
    "insect-glaive",
    "light-bowgun",
    "heavy-bowgun",
    "bow",
  ];

  useEffect(() => {
    async function fetchWeaponsData() {
      try {
        const response = await fetch("https://mhw-db.com/weapons");
        const data = await response.json();
        setWeapons(data);
        console.log({data});
      } catch (error) {
        console.error("error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWeaponsData();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p className={styles.loading}><i className="fa-solid fa-gear fa-spin"></i> Building...</p>
      ) : (
        weaponTypes.map((type) => (
          <div key={type} className={styles.weaponType}>
            <h2>{type.replace("-", " ").toUpperCase()}</h2>
            <ul className={styles.weaponList}>
              {weapons
                .filter((weapon) => weapon.type === type)
                .map((filteredWeapon) => (
                  <li key={filteredWeapon.id} className={styles.weaponItem}>
                    <div className={styles.weaponHeader}>
                      <img
                        src={filteredWeapon.assets?.icon}
                        alt="Weapon Icon"
                      />
                      <h3>{filteredWeapon.name}</h3>
                    </div>
                    <p>Attack: {filteredWeapon.attack.display} ({filteredWeapon.attack.raw})</p>
                    {filteredWeapon.assets?.image && (
                      <div className={styles.weaponImageContainer}>
                        <img
                          src={filteredWeapon.assets.image}
                          alt={filteredWeapon.name}
                        />
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

// umstrukturieren mit ner navigation für waffentypen sodass nicht alle aufeinmal angezeigt werden