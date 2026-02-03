import { useState } from "react";
import writeIcon from "../../assets/images/write/write.svg";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

export default function CommentCreator() {
   const [commentText, setCommentText] = useState("");

   const handleAddingComment = (
      event: React.MouseEvent<HTMLButtonElement>,
   ): void => {
      //adding comment logic
      console.log(event, commentText);
   };

   return (
      <section>
         <div>
            <img src={writeIcon} alt="write a comment icon" />
            <label htmlFor="comment-input">Add a comment</label>
         </div>
         <Input
            id="comment-input"
            placeholder="Write description here..."
            value={commentText}
            onChange={(event) => {
               setCommentText(event.target.value);
            }}
            height="lgInput"
         />
         <Button text="Add a comment" onClick={handleAddingComment} />
      </section>
   );
}
