import styles from './Button.module.css';

interface IButtonProps {
   text: string;
   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({text, onClick}: IButtonProps) {
   return (
      <button className={styles.button} onClick={onClick}>
         {text}
      </button>
   );
}
