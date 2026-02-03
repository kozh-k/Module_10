import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

interface IFormProps {
   buttonText: string;
   onSubmit: () => Promise<void>;
}

export default function Form({ buttonText, onSubmit }: IFormProps) {
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");

   return (
      <form action="">
         <section>
            <label htmlFor="email">Email</label>
            <Input
               id="email"
               placeholder="Enter email"
               value={email}
               onChange={(event) => {
                  setEmail(event.target.value);
               }}
               height="smInput"
            />
         </section>
         <section>
            <label htmlFor="password">Email</label>
            <Input
               id="password"
               placeholder="Enter password"
               value={password}
               onChange={(event) => {
                  setPassword(event.target.value);
               }}
               height="smInput"
            />
         </section>
         <Button text={buttonText} onClick={() => {onSubmit()}}/>
      </form>
   );
}
