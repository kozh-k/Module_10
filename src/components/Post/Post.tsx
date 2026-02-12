import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import dropDown from "../../assets/images/dropDown/dropDown.svg";
import likeIcon from "../../assets/images/like/like.svg";
import commentIcon from "../../assets/images/comment/comment.svg";
import CommentsSection from "../CommentsSection/CommentsSection";
import styles from "./Post.module.css";
import CommentCreator from "../CommentCreator/CommentCreator";
import UserPreview from "../UserPreview/UserPreview";

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
         <UserPreview
            username={user.name}
            avatar={user.avatar}
            attachment={postTime}
         />
         <figure>
            {image ? (
               <img className={styles.postImage} src={image} alt="post image" />
            ) : null}
            <figcaption>{description}</figcaption>
         </figure>
         <section className={styles.likesAndComments}>
            <div>
               <img src={likeIcon} alt="like icon" />
               <span>{`${likesQuantity} likes`}</span>
            </div>
            <div>
               <img src={commentIcon} alt="comments icon" />
               {user.isLoggedIn ? (
                  <>
                     <span>{`${comments.length} comments`}</span>
                     <button
                        className={styles.expandButton}
                        onClick={handleExpandButton}
                     >
                        <img src={dropDown} alt="dropdown icon" />
                     </button>
                  </>
               ) : (
                  <p>{"You have to login to see the comments"}</p>
               )}
            </div>
         </section>
         {isCommentsSectionExpanded && user.isLoggedIn ? (
            <CommentsSection comments={comments} />
         ) : null}
         {user.isLoggedIn ? <CommentCreator /> : null}
      </article>
   );
}
