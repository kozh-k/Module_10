import type { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface IInputProps {
   id: string;
   placeholder: string;
   value: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   height: "sm" | "lg";
   label: string;
   icon: string;
   alt: string;
}

export default function Input({
   id,
   placeholder,
   value,
   onChange,
   height,
   label,
   icon,
   alt,
}: IInputProps) {
   return (
      <div className={styles.inputContainer}>
         <div className={styles.inputHeader}>
            <img src={icon} alt={alt} />
            <label htmlFor={id}>{label}</label>
         </div>
         <input
            className={`${styles.input} ${styles[height]}`}
            id={id}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
      </div>
   );
}
