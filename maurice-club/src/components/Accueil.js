"use client";
import react from "react";
import { useState } from "react";
import styles from '../styles/Accueil.module.css'
import Carrousel from "./Carrousel";
import Link from 'next/link';

function Accueil() {
  const [showCarrousel, setShowCarrousel] = useState(false);

  const handleToggleCarrousel = () => {
    setShowCarrousel(prev => !prev);
  };

    return (
       <div className={styles.imageContainer}>
      <img src='/morne.png' alt="image du Morne" className={styles.morne} />
      <button className={styles.personalize}>Personnaliser votre voyage</button>

      {/* Bouton pour activer/désactiver le carrousel */}
      <button className={styles.activiteButton} onClick={handleToggleCarrousel}>
        Activités
      </button>

      {/* Affichage conditionnel du carrousel */}
       {showCarrousel && (
        <div className={styles.carrouselOverlay}>
          <Carrousel />
        </div>
      )}
      <div className={styles.pack}>
        <div className={styles.divMango}>
            <Link href="/offre/PageMango">Go to profile page</Link>
          <span>Pack Mango</span>
          <p>Vol économique</p>
        </div>
        <div className={styles.divCorail}>
          <span>Pack Corail</span>
          <p>Vol économique</p>
        </div>
        <div className={styles.divLuxe}>
          <span>Pack Luxe</span>
          <p>Vol économique</p>
        </div>
      </div>
    </div>
  );
}

export default Accueil;