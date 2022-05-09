import styles from "./cardDeck.module.css";
export default function CardDeck(props) {
  console.log(props);
  return (
    <div className={styles.cardDeck}>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
    </div>
  );
}
