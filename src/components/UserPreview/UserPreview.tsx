import styles from "@/components/UserPreview/UserPreview.module.css";

interface UserPreviewProps {
   username: string;
   avatar?: string;
   attachment: string;
   style?: React.CSSProperties;
}

export default function UserPreview({
   username,
   avatar,
   attachment,
   style,
}: UserPreviewProps) {
   return (
      <section className={styles.postHeader} style={style}>
         <img src={avatar} alt="user avatar" />
         <div>
            <h2 className={styles.postAuthor}>{username}</h2>
            <p className={styles.postTime}>{attachment}</p>
         </div>
      </section>
   );
}
