import styles from "@/components/UI/Switch/Switch.module.css";

interface SwitchProps {
   text: string;
   isChecked: boolean;
   onChange: () => void;
}

export default function Switch({ text, isChecked, onChange }: SwitchProps) {
   return (
      <div className={styles.switchContainer}>
         <label className={styles.switch}>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            <span className={styles.slider}></span>
         </label>
         <p>{text}</p>
      </div>
   );
}
