import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./NotFoundPage.module.css";
import whiteNotFoundIcon from "../../assets/images/notFound/whiteNotFound.svg";

export default function NotFoundPage() {
   return (
      <div className={styles.wrapper}>
         <Header isNavigationVisible={false} />
         <main className={styles.main}>
            <div className="container">
               <div className={styles.errorContainer}>
                  <img src={whiteNotFoundIcon} alt="cross icon" />
                  <h1 className={styles.errorText}>Page not found</h1>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
}
