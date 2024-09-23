import React from 'react';
import styles from "./ItemCard.module.css";
import { iconData } from '../../assets/data/iconData';

export default function ItemCard({ item }) {
  return (
    <div className={styles.card}>
      <img src={iconData[0].src} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description || 'No description available'}</p>
      <span>Rarity: {item.rarity}</span>
    </div>
  );
};