import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Search } from 'lucide-react';
import { AlignJustify } from "lucide-react";
import { Handbag } from 'lucide-react';
import { User } from 'lucide-react';
import { Button, Popover } from 'antd';
import React from 'react';
import Link from 'next/link';


const content = (
    <div className={styles.monpopover}>
        <button className={styles.buttonPopover}>Comparateur de vols ✈️</button>
        <button className={styles.buttonPopover}>Voiture de location 🚙</button>
        <button className={styles.buttonPopover}>Hébergements 🏠</button>
        <button className={styles.buttonPopover}>Activités 🚤</button>
    </div>
)
function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.containerLogoMenu}>
                <Link href="/">
                    <img src="/MauriceClubLogo.png" alt="logo" className={styles.logo} />
                </Link>
                <Popover content={content} title="Menu" trigger="hover" >
                    <button className={styles.iconAlign}>< AlignJustify /></button>
                </Popover>
            </div>
            <div className={styles.contactContainer}>
                <p className={styles.contactTitle}>Demandes et Réservations </p>
                <div className={styles.contactButton}>
                    <span className={styles.phoneIcon}>📞</span>
                    <button className={styles.phoneNumber}>06.15.61.56.29</button>
                </div>
            </div>
            <div className={styles.inputDiv}>
                <button className={styles.userButton}>
                    <User />
                </button>
                <button className={styles.userButton}>
                    <Handbag />
                </button>
                <div className={styles.inputWrapper}>
                    <input className={styles.linput} type="text" placeholder="Rechercher..." />
                    <button className={styles.searchButton}>
                        <Search />
                    </button>
                </div>

            </div>

        </div >

    )
}
export default Header