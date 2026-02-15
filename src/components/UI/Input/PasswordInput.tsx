import { useState, type ChangeEvent } from "react";
import styles from "@/components/UI/Input/Input.module.css";
import Icon from "../Icon/Icon";
import type { IconName } from "@/constants/icons";

interface IInputProps {
   id: string;
   placeholder: string;
   value: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   height: "sm" | "lg";
   label: string;
   icon: IconName;
   errorText: string | undefined;
}

export default function Input({
   id,
   placeholder,
   value,
   onChange,
   height,
   label,
   icon,
   errorText,
}: IInputProps) {
   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

   const handleClick = () => {
      setIsPasswordVisible(!isPasswordVisible);
   };

   return (
      <div className={styles.inputContainer}>
         <div className={styles.inputHeader}>
            <Icon name={"keyboard"} />
            <label htmlFor={id}>{label}</label>
         </div>
         <div className={styles.inputWrapper}>
            <input
               className={`${styles.input} ${styles[height]}`}
               id={id}
               type={isPasswordVisible ? "text" : "password"}
               placeholder={placeholder}
               value={value}
               onChange={onChange}
            />
            <button className={styles.eyeButton} onClick={handleClick}>
               <Icon name={icon} />
            </button>
         </div>
         <div className={errorText ? styles.inputError : styles.inputErrorNone}>
            <Icon name={"info"} />
            <p>{errorText}</p>
         </div>
      </div>
   );
}
