import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { UserContext } from "../../contexts/UserContext/UserContext";
import styles from './Header.module.css';

export default function Header() {
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
         {user.isLoggedIn ? (
            <div className={styles.userInfo}>
               <img src={user.avatar} alt="avatar" />
               <p>{user.name}</p>
            </div>
         ) : (
            <nav>
               <Link to="/signup">Sign Up</Link>
               <Link to="/signin">Sign In</Link>
            </nav>
         )}
      </header>
   );
}
