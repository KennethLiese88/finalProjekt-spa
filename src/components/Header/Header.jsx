import React, { useContext } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { FavContext } from '../../context/FavContext'
import styles from "./Header.module.css";

export default function Header() {
  const { favMonster } = useContext(FavContext);

  return (
    <>
      <header>
        <h1>Monster Hunter World</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/monster">Monster</NavLink></li>
            <li><NavLink to="/weapons">Weapons</NavLink></li>
            <li><NavLink to="/items">Items</NavLink></li>
            <li><NavLink to="/hunts"><i className="fa-regular fa-star"></i>Hunts({favMonster.length})</NavLink></li> 
            <li><NavLink to="/comments">Comments</NavLink></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
