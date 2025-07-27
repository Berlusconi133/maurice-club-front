'use client';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Carrousel.module.css';

const images = ['/catamaran.png'  , '/sept-couleurs.png' ,'/parachute.png', '/plonge.jpg'];

function Carrousel() {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={styles.carrouselContainer}>
      <div className={styles.carousel}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className={`${styles.item} ${i === index ? styles.active : ''}`}
          />
        ))}
      </div>
      <div>
        <button className={styles.nav} onClick={prev}>‹</button>
        <button className={styles.nav} onClick={next}>›</button>
      </div>
    </div>
  );
}

export default Carrousel;
