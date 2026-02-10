import styles from './Button.module.css';

interface IButtonProps {
   text: string;
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
   width: number;
}

export default function Button({text, onClick, width}: IButtonProps) {
   const buttonStyle = {
      width: `${width}px`
   }

   return (
      <button className={styles.button} style={buttonStyle} onClick={onClick}>
         {text}
      </button>
   );
}
