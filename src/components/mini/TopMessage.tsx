import styles from "./TopMessage.module.scss";
interface TopMessageProps {
  topTitle: string;
  bottomTitle?: string;
  color?: string;
}
const TopMessage = ({ color, topTitle, bottomTitle }: TopMessageProps) => {
  return (
    <div className={styles.container}>
      <h3 className={color === "white" ? `${styles.topTitle} ${styles.white}` : styles.topTitle}>{topTitle}</h3>
      <h3 className={color === "white" ? `${styles.bottomTitle} ${styles.white}` : styles.bottomTitle}>
        {bottomTitle}
      </h3>
    </div>
  );
};

export default TopMessage;
