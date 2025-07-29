import React from 'react';
import styles from './PackMango.module.css';

export default function PackMango() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.btn}>Offre 1</button>
        <button className={styles.btn}>Offre 2</button>
        <button className={styles.btn}>Offre 3</button>
      </header>

      <main className={styles.main}>
        <section className={styles.part}>
          <img
            src="/images/vol.png"
            alt="Vol"
            className={styles.image}
          />
          <div className={styles.text}>
            <h3>Le Vol</h3>
            <p>Profitez d'un vol confortable et rapide vers votre destination.</p>
          </div>
        </section>

        <section className={styles.part}>
          <img
            src="/images/hebergement.png"
            alt="Hébergement"
            className={styles.image}
          />
          <div className={styles.text}>
            <h3>L'Hébergement</h3>
            <p>Hôtels sélectionnés pour un confort optimal durant votre séjour.</p>
          </div>
        </section>

        <section className={styles.part}>
          <img
            src="/images/voiture.png"
            alt="Voiture"
            className={styles.image}
          />
          <div className={styles.text}>
            <h3>La Voiture</h3>
            <p>Location de voiture pour vous déplacer librement et en toute sécurité.</p>
          </div>
        </section>
      </main>
    </div>
  );
}