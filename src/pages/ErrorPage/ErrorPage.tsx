import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./ErrorPage.module.css";
import whiteCrossIcon from "../../assets/images/cross/white-cross.svg";

export default function ErrorPage() {
   return (
      <div className={styles.wrapper}>
         <Header isNavigationVisible={false} />
         <main className={styles.main}>
            <div className="container">
               <div className={styles.errorContainer}>
                  <img src={whiteCrossIcon} alt="cross icon" />
                  <h1 className={styles.errorText}>
                     Oops...
                     <br />
                     Something bad has just happened
                  </h1>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
}
