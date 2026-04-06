import styles from "@/components/CommentsSection/CommentsSection.module.css";

interface CommentsSectionProps {
   comments: string[];
}

export default function CommentsSection({ comments }: CommentsSectionProps) {
   return (
      <section className={styles.commentsSection}>
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
