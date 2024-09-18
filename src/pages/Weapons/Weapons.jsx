import React, { useEffect, useState } from "react";

export default function Weapons() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    async function fetchWeaponsData() {
      try {
        const response = await fetch("https://mhw-db.com/weapons");
        const data = await response.json();
        setWeapons(data);
        console.log({ weapons });
      } catch (error) {
        console.error("error:", error);
      }
    }
    fetchWeaponsData();
  }, []);

  return (
    <div>
      <ul>
        {weapons.map((weapon) => (
          <li key={weapon.id}>{weapon.name}</li>
        ))}
      </ul>
    </div>
  );
}
