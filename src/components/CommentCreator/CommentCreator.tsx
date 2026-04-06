import { useState } from "react";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import styles from "@/components/CommentCreator/CommentCreator.module.css";
// import { posts } from "@/data/posts";

export default function CommentCreator() {
   const [commentText, setCommentText] = useState("");

   const handleAddingComment = (
      event: React.MouseEvent<HTMLButtonElement>,
   ): void => {
      //adding comment logic
      console.log(event, commentText);
   };

   return (
      <form className={styles.commentCreator}>
         <Input
            id="comment-input"
            placeholder="Write description here..."
            value={commentText}
            onChange={(event) => {
               setCommentText(event.target.value);
            }}
            height="lg"
            label="Add a comment"
            icon={"write"}
         />
         <Button
            text="Add a comment"
            onClick={handleAddingComment}
            size={"lg"}
         />
      </form>
   );
}
