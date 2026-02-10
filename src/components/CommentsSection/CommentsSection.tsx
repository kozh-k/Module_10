import styles from "./CommentsSection.module.css";

interface ICommentSectionProps {
   comments: string[];
}

export default function CommentsSection({ comments }: ICommentSectionProps) {
   return (
      <section>
         <ul className={styles.commentsList}>
            {comments.map((comment, index) => {
               return (
                  <li key={index}>
                     #{index + 1}. {comment}
                  </li>
               );
            })}
         </ul>
      </section>
   );
}
