import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';



function Header() {
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />

    return (
        <div className={styles.header}>
            <div className={styles.containerLogoMenu}>
                <img src='/logomaurice-club.png' alt='logo' className={styles.logo} />
                <button className={styles.hideMenu}>
                    <FontAwesomeIcon className={styles.firstIcon} icon={faBars} />
                </button>
            </div>
            <div className={styles.contactContainer}>
                <p className={styles.scontactTitle}>Demandes et Réservations</p>
                <div className={styles.contactButton}>
                    <span className={styles.phoneIcon}>📞</span>
                    <button className={styles.phoneNumber}>06.15.61.56.29</button>
                </div>
            </div>
            <div className={styles.inputDiv}>            
            <button className={styles.userButton}><FontAwesomeIcon className={styles.userIcon} icon={faUser}/>
            </button>
              <input></input>
              <button className="material-symbols-outlined">search</button>
            </div >
        </div >
    
    )   
}
export default Header