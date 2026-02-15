import styles from "@/components/UI/Toggle/Toggle.module.css";

interface ToggleProps {
   activeButton: 1 | 2;
}

export default function Toggle({ activeButton }: ToggleProps) {
   return (
      <div className={styles.toggle}>
         <button
            className={
               activeButton === 1
                  ? styles.activeToggleButton
                  : styles.toggleButton
            }
         >
            Profile info
         </button>
         <button
            className={
               activeButton === 2
                  ? styles.activeToggleButton
                  : styles.toggleButton
            }
         >
            Statistics
         </button>
      </div>
   );
}
