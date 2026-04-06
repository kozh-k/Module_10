import { type ChangeEvent } from "react";
import styles from "@/components/UI/Input/Input.module.css";
import Icon from "../Icon/Icon";
import type { IconName } from "@/constants/icons";

interface IInputProps {
   id: string;
   placeholder: string;
   value: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   onFocus?: () => void;
   onBlur?: () => void;
   height: "sm" | "lg";
   label: string;
   icon: IconName;
   errorText?: string;
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
   icon,
   errorText,
}: IInputProps) {
   return (
      <div className={styles.inputContainer}>
         <div className={styles.inputHeader}>
            <Icon name={icon} />
            <label htmlFor={id}>{label}</label>
            {value ? <Icon name={errorText ? "crossRed" : "check"} /> : null}
         </div>
         <input
            className={
               value && errorText
                  ? `${styles.errorInput} ${styles[height]}`
                  : `${styles.input} ${styles[height]}`
            }
            id={id}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
         />
         <div className={errorText ? styles.inputError : styles.inputErrorNone}>
            <Icon name={"info"} />
            <p>{errorText}</p>
         </div>
      </div>
   );
}
