import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { UserContext } from "../../contexts/UserContext/UserContext";
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
            user.isLoggedIn ? (
               <div className={styles.userInfo}>
                  <img src={user.avatar} alt="avatar" />
                  <p>{user.name}</p>
               </div>
            ) : (
               <nav>
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/signin">Sign In</Link>
               </nav>
            )
         ) : null}
      </header>
   );
}
