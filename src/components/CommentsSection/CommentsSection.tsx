interface ICommentSectionProps {
   comments: string[];
}

export default function CommentsSection({ comments }: ICommentSectionProps) {
   return (
      <section>
         <ul>
            {comments.map((comment, index) => {
               return (
                  <li>#{index}. {comment}</li>
               )
            })}
         </ul>
      </section>
   );
}
