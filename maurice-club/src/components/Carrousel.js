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
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const prev = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setIndex((index + 1) % slides.length);
  };


    // Handler pour cacher le carrousel au scroll
    const handleScroll = () => {
      setVisible(false);
      window.removeEventListener('scroll', handleScroll); // on enlève le listener après la première disparition
    };


    
  return (
    
    <div className={styles.carrouselContainer}>
      <button onClick={prev} className={styles.nav}>‹</button>

      <div className={styles.carousel}>
        {slides.map((slide, i) => {
          const offset = (i - index + slides.length) % slides.length;
          const rotationY = offset * 90;

          const style = {
            transform: `rotateY(${rotationY}deg) translateZ(250px)`,
            opacity: offset === 0 ? 1 : 0.5,
            filter: offset === 0 ? 'drop-shadow(0 0 10px rgba(0,0,0,0.6))' : 'none',
            zIndex: offset === 0 ? 2 : 1,
            transition: 'transform 0.6s ease, opacity 0.6s ease, filter 0.6s ease',
          };

          return (
            <div key={i} className={styles.item} style={style}>
              <img src={slide.src} alt={slide.title} className={styles.image} />
              <div className={styles.textContainer}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <p className={styles.price}>{slide.price}</p>
                <button className={styles.btnAdd}>Ajouter au panier</button>
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={next} className={styles.nav}>›</button>
    </div>
  );
}
