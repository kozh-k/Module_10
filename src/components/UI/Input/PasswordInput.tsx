import { useState, type ChangeEvent } from "react";
import styles from "@/components/UI/Input/Input.module.css";
import Icon from "../Icon/Icon";

interface IInputProps {
   id: string;
   placeholder: string;
   value: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   onFocus?: () => void;
   onBlur?: () => void;
   height: "sm" | "lg";
   label: string;
   errorText: string | undefined;
   isSignUpInput: boolean;
}

export default function Input({
   id,
   placeholder,
   value,
   onChange,
   onFocus,
   onBlur,
   height,
   label,
   errorText,
   isSignUpInput,
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
            {value ? <Icon name={errorText ? "crossRed" : "check"} /> : null}
         </div>
         <div className={styles.inputWrapper}>
            <input
               className={
                  value && errorText
                     ? `${styles.errorInput} ${styles[height]}`
                     : `${styles.input} ${styles[height]}`
               }
               id={id}
               type={isPasswordVisible ? "text" : "password"}
               placeholder={placeholder}
               value={value}
               onChange={onChange}
               onFocus={onFocus}
               onBlur={onBlur}
            />
            <button className={styles.eyeButton} type="button" onClick={handleClick}>
               <Icon name={isPasswordVisible ? "eyeCrossed" : "eye"} />
            </button>
         </div>
         <div className={errorText ? styles.inputError : styles.inputErrorNone}>
            <Icon name={"info"} />
            <p>{errorText}</p>
         </div>
         {isSignUpInput && !errorText && value ? (
            <div className={styles.inputError}>
               <Icon name={"thumbsUp"} />
               <p className={styles.strongPassword}>Your password is strong</p>
            </div>
         ) : null}
      </div>
   );
}
