import type { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface IInputProps {
   id: string;
   placeholder: string;
   value: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   height: "smInput" | "lgInput";
}

export default function Input({
   id,
   placeholder,
   value,
   onChange,
   height,
}: IInputProps) {
   return (
      <input
         className={`${styles.input} ${styles[height]}`}
         id={id}
         type="text"
         placeholder={placeholder}
         value={value}
         onChange={onChange}
      />
   );
}
