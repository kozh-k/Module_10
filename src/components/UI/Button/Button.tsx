import styles from "@/components/UI/Button/Button.module.css";

interface IButtonProps {
   text: string;
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
   size: string;
}

export default function Button({ text, onClick, size }: IButtonProps) {
   return (
      <button className={`${styles.button} ${styles[size]}`} onClick={onClick}>
         {text}
      </button>
   );
}
