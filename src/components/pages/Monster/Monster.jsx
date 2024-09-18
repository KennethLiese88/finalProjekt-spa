import React, { useEffect, useState } from 'react'

export default function Monster() {
  const [monster, setMonster] = useState([]);

  useEffect(()=>{
    async function fetchMonsterData() {
      try {
        const response = await fetch("https://mhw-db.com/monsters");
        const data = await response.json();
        setMonster(data)
        console.log({monster});
        
      } catch (error) {
        console.error("error:", error);
      }
    }
    fetchMonsterData()
  },[])

  return (
    <div>
      {monster.map(mon=>(
        <li key={mon.id}>{mon.name}</li>
      ))}
    </div>
  )
}
