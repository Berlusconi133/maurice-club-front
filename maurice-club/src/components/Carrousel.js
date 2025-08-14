'use client';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Carrousel.module.css';

const slides = [
  {
    src: '/catamaran.png',
    title: 'Balade en Catamaran',
    description: 'Profitez d’une balade inoubliable sur les eaux calmes.',
    price: '150€',
  },
  {
    src: '/sept-couleurs.png',
    title: 'Les 7 Couleurs',
    description: 'Explorez ce site naturel étonnant et unique.',
    price: '80€',
  },
  {
    src: '/parachute.png',
    title: 'Parachute ascensionnel',
    description: 'Une expérience aérienne exceptionnelle.',
    price: '120€',
  },
  {
    src: '/plonge.jpg',
    title: 'Plongée sous-marine',
    description: 'Découvrez les fonds marins en toute sécurité.',
    price: '200€',
  },
];

export default function Carrousel() {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prévient les erreurs d'hydratation SSR

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const itemDistance = 280; // Correspond à la largeur de .carousel

  return (
    <div className={styles.carrouselContainer}>
      <button onClick={prev} className={styles.nav}>‹</button>

      <div className={styles.carousel}>
        {slides.map((slide, i) => {
          const offset = (i - index + slides.length) % slides.length;
          const rotationY = (offset * 360) / slides.length; // Calcule l'angle pour n'importe quel nombre de slides
          const isActive = i === index;

          const style = {
            transform: `rotateY(${rotationY}deg) translateZ(${itemDistance}px)`,
            zIndex: isActive ? slides.length : slides.length - offset,
          };
          
          // Combine la classe de base avec la classe 'active' si nécessaire
          const itemClasses = `${styles.item} ${isActive ? styles.active : ''}`;

          return (
            <div key={i} className={itemClasses} style={style}>
              <img src={slide.src} alt={slide.title} className={styles.image} />
              <div className={styles.textContainer}>
                {/* On n'a plus besoin de classes ici car le CSS cible les balises */}
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <div>
                  <p className={styles.price}>{slide.price}</p>
                  <button className={styles.btnAdd}>Ajouter au panier</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={next} className={styles.nav}>›</button>
    </div>
  );
}