import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "@/pages/ErrorPage/ErrorPage.module.css";
import Icon from "@/components/UI/Icon/Icon";

export default function ErrorPage() {
   return (
      <div className={styles.wrapper}>
         <Header isNavigationVisible={false} />
         <main className={styles.main}>
            <div className="container">
               <div className={styles.errorContainer}>
                  <Icon name={"cross"} />
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
