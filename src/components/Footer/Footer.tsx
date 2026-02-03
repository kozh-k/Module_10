import styles from './Footer.module.css';

export default function Footer() {
   const getCurrentYear = () => new Date().getFullYear();

   return (
      <footer className={styles.footer}>
         <p>&copy; {getCurrentYear()} sidekick</p>
      </footer>
   );
}
