import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Accueil from "@/components/Accueil";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
          <Header />
          <Accueil/>
          <Footer/>

      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
