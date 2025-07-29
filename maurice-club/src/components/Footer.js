import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';




function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.section}>
                    <h3>À propos</h3>
                    <Link href="/a-propos">Qui sommes-nous ?</Link>
                    <p>Votre agence numérique à Maurice.</p>
                </div>

                <div className={styles.section}>
                    <h3>Légal</h3>
                    <ul>
                        <li><a href="#politique">Confidentialité</a></li>
                        <li><a href="#mentions">Mentions légales</a></li>
                        <li><a href="#conditions">CGV</a></li>
                        <li><a href="#cookies">Cookies</a></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Contact et support</h3>
                    <p>contact@maurice-club.mu</p>
                    <p>Téléphone : +230 123 4567</p>
                </div>
                <div className={styles.section}>
                    <h3>Suivez-nous</h3>
                    <div className={styles.socials}>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </div>
            </div>
            <div className={styles.bottomBar}>
                © 2025 Agence Maurice-club — Tous droits réservés
            </div>
        </footer>
    );
}

export default Footer;
