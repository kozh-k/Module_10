import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import styles from './PostCreator.module.css';
import Button from "../UI/Button/Button";

export default function PostCreator() {
   const user = useContext(UserContext);

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(event);
   }

   return (
      <article className={styles.postCreator}>
         <img src={user.avatar} alt="user avatar" />
         <div>
            <p>What's happening?</p>
            <Button text="Tell everyone" onClick={handleClick} width={188}/>
         </div>
      </article>
   );
}
