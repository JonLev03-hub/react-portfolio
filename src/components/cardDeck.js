import styles from "./cardDeck.module.css";
export default function CardDeck(props) {
  const deck = props.props;
  return (
    <div className={styles.cardDeck}>
      <img
        className={styles.topCard}
        src={deck.image}
        alt="Well this is supposed to be a super cool website image but I guess you just get text instead."
      ></img>
      <a href={deck.Link} className="test" target="_blank">
        <div className={styles.bottomCard}>
          <h2 className={styles.h2}>{deck.title}</h2>
          <p className={styles.desc}>{deck.desc}</p>
          <h3 className={styles.h3}>Languages :</h3>
          <ul className={styles.ul}>
            {deck.languages.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <br />
          <h3 className={styles.h3}>Technologies :</h3>
          <ul className={styles.ul}>
            {deck.technologies.map((item) => (
              <li>{item}</li>
            ))}
          </ul>

          <p className={styles.link}>Click the card to checkout the project!</p>
        </div>
      </a>
    </div>
  );
}
