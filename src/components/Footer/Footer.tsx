import styles from "@/components/Footer/Footer.module.css";

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className={styles.footer}>
         <p>&copy; {currentYear} sidekick</p>
      </footer>
   );
}
