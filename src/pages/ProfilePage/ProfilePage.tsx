import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Switch from "@/components/UI/Switch/Switch";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";
import { useContext } from "react";
import styles from "@/pages/ProfilePage/ProfilePage.module.css";

export default function ProfilePage() {
   const theme = useContext(ThemeContext);

   const handleSwitch = (): void => {
      theme.toggleTheme();
   };

   return (
      <div className={styles.wrapper}>
         <Header isNavigationVisible={true} />
         <main className={styles.main}>
            
            <Switch
               text={`${theme.theme} theme`}
               isChecked={theme.theme === 'light'}
               onChange={handleSwitch}
            />
         </main>
         <Footer />
      </div>
   );
}
