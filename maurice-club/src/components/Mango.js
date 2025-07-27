import react from "react";
import styles from '../styles/Mango.module.css';
import Header from "./Header";

function Mango() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <span>Pack Mango</span>
                <hr></hr>
                <div className={styles.divPlane}>
                    <img />
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.divHotel}>
                    <img />
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> <div className={styles.divAuto}>
                    <img />
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>)
}
export default Mango;