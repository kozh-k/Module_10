import type { ChangeEvent } from "react";
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
}

export default function Input({
   id,
   placeholder,
   value,
   onChange,
   height,
   label,
   icon,
}: IInputProps) {
   return (
      <div className={styles.inputContainer}>
         <div className={styles.inputHeader}>
            <Icon name={icon} />
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
