import { useState } from "react";
import writeIcon from "../../assets/images/write/write.svg";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import styles from "./CommentCreator.module.css";

export default function CommentCreator() {
   const [commentText, setCommentText] = useState("");

   const handleAddingComment = (
      event: React.MouseEvent<HTMLButtonElement>,
   ): void => {
      //adding comment logic
      console.log(event, commentText);
   };

   return (
      <section className={styles.commentCreator}>
         <Input
            id="comment-input"
            placeholder="Write description here..."
            value={commentText}
            onChange={(event) => {
               setCommentText(event.target.value);
            }}
            height="lg"
            label="Add a comment"
            icon={writeIcon}
            alt="write a comment icon"
         />
         <Button
            text="Add a comment"
            onClick={handleAddingComment}
            width={211}
         />
      </section>
   );
}
