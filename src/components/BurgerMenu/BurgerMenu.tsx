import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "@/components/BurgerMenu/BurgerMenu.module.css";
import logo from "@/assets/images/logo/logo.png";
import { UserContext } from "@/contexts/UserContext/UserContext";

interface BurgerMenuProps {
   onClick: () => void;
}

export default function BurgerMenu({ onClick }: BurgerMenuProps) {
   const user = useContext(UserContext);

   return (
      <div className={styles.burgerContainer}>
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
                  <Link to="/profile" onClick={onClick}>
                     <img
                        className={styles.burgerAvatar}
                        src={user.avatar}
                        alt="avatar"
                     />
                  </Link>
               ) : null}
            </div>
            {user.isLoggedIn ? (
               <nav className={styles.burgerNav}>
                  <div>
                     <Link
                        className={styles.burgerLink}
                        to="/profile"
                        onClick={onClick}
                     >
                        Profile info
                     </Link>
                  </div>
                  <div>
                     <Link
                        className={styles.burgerLink}
                        to="#"
                        onClick={onClick}
                     >
                        Statistics
                     </Link>
                  </div>
               </nav>
            ) : (
               <nav className={styles.burgerNav}>
                  <div>
                     <Link className={styles.burgerLink} to="/signup" onClick={onClick}>
                        Sign Up
                     </Link>  
                  </div>
                  <div>
                     <Link className={styles.burgerLink} to="/signin" onClick={onClick}>
                        Sign In
                     </Link>
                  </div>
               </nav>
            )}
         </div>
      </div>
   );
}
