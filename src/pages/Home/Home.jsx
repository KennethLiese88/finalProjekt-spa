import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Monster Hunter World</h1>
                <p className={styles.tagline}>Embark on an epic journey to hunt fierce monsters!</p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Explore a Vast World</h2>
                <p className={styles.text}>
                    In Monster Hunter World, you take on the role of a hunter, tasked with
                    tracking down and defeating massive creatures in a living, breathing ecosystem.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Upgrade Your Gear</h2>
                <p className={styles.text}>
                    Craft and upgrade your weapons and armor using materials gathered from
                    your hunts to take on even more challenging monsters.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Join Forces</h2>
                <p className={styles.text}>
                    Team up with other hunters online to take down the fiercest monsters in
                    thrilling multiplayer battles.
                </p>
            </section>

            <footer className={styles.footer}>
                <p className={styles.footerText}>© 2024 Monster Hunter World Fanpage</p>
            </footer>
        </div>
  )
}
