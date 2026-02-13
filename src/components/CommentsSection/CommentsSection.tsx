import styles from "@/components/CommentsSection/CommentsSection.module.css";

interface CommentSectionProps {
   comments: string[];
}

export default function CommentsSection({ comments }: CommentSectionProps) {
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
