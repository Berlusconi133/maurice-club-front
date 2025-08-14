"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import styles from '../styles/Accueil.module.css'
import Carrousel from "./Carrousel";
import Link from 'next/link';
import { Eye } from "lucide-react";
import Header from './Header';
import Footer from './Footer';



function Accueil() {
  const [showCarrousel, setShowCarrousel] = useState(false);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon key={i} className={styles.starIcon} icon={faStar} />
    );
  }
  const handleToggleCarrousel = () => {
    setShowCarrousel(prev => !prev);
  };

  return (

    <div className={styles.imageContainer}>
      <div className={styles.header}> <Header />
      </div>
      <img src='/morne.png' alt="image du Morne" className={styles.morne} />
      {/* Bouton pour activer/désactiver le carrousel */}
      <button className={styles.btnActivite} onClick={handleToggleCarrousel}>
        Activités
        <Eye className={styles.eyeIcon} />
      </button>

      <div>
        {/* Affichage conditionnel du carrousel */}
        {showCarrousel && (
          <div className={styles.carrouselOverlay}>
            <Carrousel />
          </div>
        )}
        <div className={styles.pack}>
          <Link href="/offres/PageMango">
            <div className={styles.divPack}>
              <span>Pack Mango</span>
            </div>
          </Link>
          <Link href="/offres/PageCorail">
            <div className={styles.divPack}>
              <span>Pack Corail</span>

            </div>
          </Link>
          <Link href="/offres/PageLux">
            <div className={styles.divPack}>
              <span>Pack Lux</span>

            </div>
          </Link>
        </div>
        <div className={styles.containerPersonalize}>
          <button className={styles.personalize}>Personnalisez votre voyage</button>
        </div>
        <div className={styles.avis}>
          <span className={styles.spanAvis}>Avis voyageurs    9,8/10</span>
        </div>
        <div className={styles.avisDiv}>
          <div className={styles.avisItem}>
            <span>{stars}</span>
            <span>publié par Sarah le 21/07/2024</span>
            <p>l'aventure et la détente, nager avec les dauphins un jour,
              se ressourcer le lendemain. Une île pleine de surprises !</p>
          </div>
          <div className={styles.avisItem}>
            <span>{stars}</span>
            <span>publié par Caroline le 3/07/2024</span>
            <p>Des eaux turquoise sublimes, une hospitalité qui touche le cœur. Une bulle de bonheur !</p>
          </div>
          <div className={styles.avisItem}>
            <span>{stars}</span>
            <span>publié par Patrick le 21/06/2024</span>
            <p>L'équilibre parfait ! Détente paradisiaque et aventures inoubliables. Le rêve à portée de main.</p>
          </div>

        </div>
        <button>+</button>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Accueil;