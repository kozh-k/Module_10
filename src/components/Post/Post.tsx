//date-fns lib to manipulate dates
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { useState, useContext } from "react";
import { UserContext } from "@/contexts/UserContext/UserContext";
import CommentsSection from "@/components/CommentsSection/CommentsSection";
import styles from "@/components/Post/Post.module.css";
import CommentCreator from "@/components/CommentCreator/CommentCreator";
import UserPreview from "@/components/UserPreview/UserPreview";
import type { Post } from "@/types/postType";
import Icon from "../UI/Icon/Icon";

export default function Post({
   owner,
   date,
   image,
   description,
   likesQuantity,
   comments,
}: Post) {
   const user = useContext(UserContext);

   const [isCommentsSectionExpanded, setIsCommentsSectionExpanded] =
      useState<boolean>(false);

   const handleExpandButton = (): void => {
      setIsCommentsSectionExpanded(!isCommentsSectionExpanded);
   };

   const calculatePostTimeAgo = (): string => {
      return formatDistanceToNow(date, {
         addSuffix: true,
         locale: enUS,
      }).replace("about ", "");
   };

   return (
      <article className={styles.post}>
         <UserPreview
            username={owner.name}
            avatar={owner.avatar}
            attachment={calculatePostTimeAgo()}
         />
         <figure>
            {image ? (
               <img className={styles.postImage} src={image} alt="post image" />
            ) : null}
            <figcaption>{description}</figcaption>
         </figure>
         <section className={styles.likesAndComments}>
            <div>
               <Icon name={'like'}/>
               <span>{`${likesQuantity} likes`}</span>
            </div>
            <div>
               <Icon name={'comment'}/>
               {user.isLoggedIn ? (
                  <>
                     <span>{`${comments.length} comments`}</span>
                     <button
                        className={styles.expandButton}
                        onClick={handleExpandButton}
                     >
                        <Icon name={'dropDown'}/>
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
