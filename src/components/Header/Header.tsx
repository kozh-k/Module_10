import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { UserContext } from "../../contexts/UserContext/UserContext";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Header.module.css";

interface IHeaderProps {
   isNavigationVisible: boolean;
}

export default function Header({ isNavigationVisible }: IHeaderProps) {
   const user = useContext(UserContext);

   return (
      <header className={styles.header}>
         <a
            className={styles.logoLink}
            href="https://sidekick-software.com"
            target="_blank"
            rel="noopener noreferrer"
         >
            <img src={logo} alt="sidekick logo" />
            <span>sidekick</span>
         </a>

         {isNavigationVisible ? (
            <>
               <input
                  type="checkbox"
                  id="burgerMenu"
                  className={styles.burgerCheckbox}
               />
               <label htmlFor="burgerMenu" className={styles.burgerLabel}>
                  <div></div>
                  <div></div>
                  <div></div>
               </label>

               <div className={styles.burgerOverlay}></div>
            </>
         ) : null}

         {isNavigationVisible && (
            <div className={styles.desktopNav}>
               {user.isLoggedIn ? (
                  <div className={styles.userInfo}>
                     <img src={user.avatar} alt="avatar" />
                     <p>{user.name}</p>
                  </div>
               ) : (
                  <nav className={styles.desktopNavLinks}>
                     <Link to="/signup">Sign Up</Link>
                     <Link to="/signin">Sign In</Link>
                  </nav>
               )}
            </div>
         )}

         {isNavigationVisible && (
            <div className={styles.mobileMenuWrapper}>
               <BurgerMenu />
            </div>
         )}
      </header>
   );
}
