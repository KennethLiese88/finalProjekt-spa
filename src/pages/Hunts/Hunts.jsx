import React, { useContext } from 'react'
import { FavContext } from '../../context/FavContext'

export default function Hunts() {
  const { favMonster } = useContext(FavContext)

  return (
    <div>
      <ul>
        {favMonster.map(monster => (
          <li key={monster.id}>{monster.name}</li>
        ))}
      </ul>
    </div>
  )
}
