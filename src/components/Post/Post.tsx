import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import dropDown from "../../assets/images/dropDown/dropDown.svg";
import likeIcon from "../../assets/images/like/like.png";
import commentIcon from "../../assets/images/comment/comment.png";
import CommentsSection from "../CommentsSection/CommentsSection";
import styles from "./Post.module.css";
import CommentCreator from "../CommentCreator/CommentCreator";

interface PostProps {
   postTime: string;
   image?: string;
   description: string;
   likesQuantity: number;
   comments: string[];
}

export default function Post({
   postTime,
   image,
   description,
   likesQuantity,
   comments,
}: PostProps) {
   const user = useContext(UserContext);

   const [isCommentsSectionExpanded, setIsCommentsSectionExpanded] =
      useState<boolean>(false);

   const handleExpandButton = (): void => {
      setIsCommentsSectionExpanded(!isCommentsSectionExpanded);
   };

   return (
      <article className={styles.post}>
         <section className={styles.postHeader}>
            <img src={user.avatar} alt="user avatar" />
            <div>
               <h2>{user.name}</h2>
               <p>{`${postTime} ago`}</p>
            </div>
         </section>
         <figure>
            {image ? <img src={image} alt="post image" /> : <></>}
            <figcaption>{description}</figcaption>
         </figure>
         <section>
            <div>
               <img src={likeIcon} alt="like icon" />
               <span>{`${likesQuantity} likes`}</span>
            </div>
            <div>
               <img src={commentIcon} alt="comments icon" />
               {user.isLoggedIn ? (
                  <>
                     <span>{`${comments.length} comments`}</span>
                     <button onClick={handleExpandButton}>
                        <img src={dropDown} alt="dropdown icon" />
                     </button>
                     {isCommentsSectionExpanded ? (
                        <CommentsSection comments={comments} />
                     ) : (
                        <></>
                     )}
                     <CommentCreator />
                  </>
               ) : (
                  <p>{"You have to login to see the comments"}</p>
               )}
            </div>
         </section>
      </article>
   );
}
