import styles from "./cardTable.module.css";
import CardDeck from "../components/cardDeck";
export default function CardTable(props) {
  const cards = [
    {
      title: "BeatJus Website",
      desc: "Simple Videography website made for an independent contractor so he can showcase his work.",
      image: "./images/BeatJus.png",
      technologies: ["HTML", "CSS", "Javascript", "React", "Redux", "Flask"],
      languages: ["Html", "Css"],
      Link: "",
    },
  ];
  return (
    <div className={styles.table}>
      {props.children}
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <CardDeck props={card} />
        ))}
      </div>
    </div>
  );
}
