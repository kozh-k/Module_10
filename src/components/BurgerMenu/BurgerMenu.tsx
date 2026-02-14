import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "@/components/BurgerMenu/BurgerMenu.module.css";
import logo from "@/assets/images/logo/logo.png";
import { UserContext } from "@/contexts/UserContext/UserContext";

export default function MobileMenu() {
   const user = useContext(UserContext);

   return (
      <div className={styles.burgerMenu}>
         <div className={styles.burgerHeader}>
            <a
               className={styles.burgerLogoLink}
               href="https://sidekick-software.com"
               target="_blank"
               rel="noopener noreferrer"
            >
               <img src={logo} alt="sidekick logo" />
               <span>sidekick</span>
            </a>
            {user.isLoggedIn ? (
               <Link to="/profile">
                  <img className={styles.burgerAvatar} src={user.avatar} alt="avatar" />
               </Link>
            ) : null}
         </div>
         {user.isLoggedIn ? (
            <nav className={styles.burgerNav}>
               <div>
                  <Link className={styles.burgerLink} to="#">Profile info</Link>
               </div>
               <div>
                  <Link className={styles.burgerLink} to="#">Statistics</Link>
               </div>
            </nav>
         ) : (
            <nav className={styles.burgerNav}>
               <div>
                  <Link className={styles.burgerLink} to="/signup">Sign Up</Link>
               </div>
               <div>
                  <Link className={styles.burgerLink} to="/signin">Sign In</Link>
               </div>
            </nav>
         )}
      </div>
   );
}
