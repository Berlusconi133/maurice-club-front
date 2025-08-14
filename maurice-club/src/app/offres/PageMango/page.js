import React from 'react';
import styles from '@/styles/PageMango.module.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ArrowLeftFromLine } from 'lucide-react';
import Link from 'next/link';

function PageMango() {
  return (
    <div className={styles.principalDiv}>
      <Header />
      <div className={styles.backButton}>
      <Link href='/' className={styles.outPack}> <ArrowLeftFromLine /></Link>
      <span>Pack Mango</span>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.itemsPack}>
            <section className={styles.part}>
              <img className={styles.image}
                src="/avion.png"
                alt="Vol"
              />
              <div className={styles.text}>
                <h3>Le Vol</h3>
                <p>La classe économique incluse dans l’offre Mango propose des vols vers Maurice avec escale,
                  opérés par Corsair, Air France, Air Mauritius
                  ou Lufthansa. Le prix comprend le transfert en taxi depuis l’aéroport de Maurice.</p>
              </div>
            </section>

            <section className={styles.part}>
              <img className={styles.image}
                src="/villamango.png"
                alt="Hébergement"
              />
              <div className={styles.text}>
                <h3>L'Hébergement</h3>
                <p>Un choix de résidences privées alliant charme local,
                   tranquillité et prestations pensées pour un séjour sans contraintes.</p>
              </div>
            </section>

            <section className={styles.part}>
              <img
                src="/mangocar.png"
                alt="Voiture"
                className={styles.image}
              />
              <div className={styles.text}>
                <h3>La Voiture</h3>
                <p>Un véhicule de location pratique et économique,
                   parfait pour vos déplacements quotidiens et la découverte de l’île à votre rythme.</p>
              </div>
            </section>
          </div>
          
          <div className={styles.description}>
            <p>Nous prenons en charge tous les aspects de votre séjour : vol en classe économique, hébergements soigneusement sélectionnés
              pour leur confort et leur authenticité, ainsi qu’une voiture de location adaptée à vos besoins.
              Grâce à nos partenaires mauriciens de confiance, vous accédez à des expériences uniques, pour découvrir l’île Maurice sous son vrai jour.
            </p>
            <hr></hr>
            <em>1699 €/pers — séjour de 15 jours (prix indicatif, ajustable selon vos choix)</em>
            <span>Pour confirmer votre réservation, vous pouvez choisir de :</span>
            <em>Verser un acompte de 50 % aujourd’hui, le solde restant sera à régler avant le début du séjour ou
              régler la totalité du montant dès maintenant.</em>
            <button className={styles.buttonPack}>Demander un devis</button>

          </div>
        </main>
        
      </div>
      <Footer />
    </div>
  );
}

export default PageMango;