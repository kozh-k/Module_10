import { Component } from "react";

interface ICommentSectionProps {
   comments: string[];
}

export default class CommentsSection extends Component<ICommentSectionProps> {
   render() {
      const { comments } = this.props;

      return (
         <section>
            <ul>
               {comments.map((comment, index) => (
                  <li key={index}>
                     #{index}. {comment}
                  </li>
               ))}
            </ul>
         </section>
      );
   }
}
