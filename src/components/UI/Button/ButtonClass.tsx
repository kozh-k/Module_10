import React from "react";
import styles from "./Button.module.css";

interface IButtonProps {
   text: string;
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
   width: number;
}

export default class Button extends React.Component<IButtonProps> {
   constructor(props: IButtonProps) {
      super(props);
   }

   render() {
      const { text, onClick, width } = this.props;
      const style = {
         width: `${width}px`,
      };

      return (
         <button
            className={styles.button}
            style={style}
            onClick={onClick}
         >
            {text}
         </button>
      );
   }
}
