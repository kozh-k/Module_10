import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "@/pages/NotFoundPage/NotFoundPage.module.css";
import Icon from "@/components/UI/Icon/Icon";

export default function NotFoundPage() {
   return (
      <div className={styles.wrapper}>
         <Header isNavigationVisible={false} />
         <main className={styles.main}>
            <div className="container">
               <div className={styles.errorContainer}>
                  <Icon name={"notFound"} />
                  <h1 className={styles.errorText}>Page not found</h1>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
}
