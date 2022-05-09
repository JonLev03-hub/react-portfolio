import styles from "./cardTable.module.css";
import CardDeck from "../components/cardDeck";
export default function CardTable(props) {
  const cards = [
    {
      title: "BeatJus_",
      image: "./images/about.png",
      technologies: ["HTML", "CSS", "Javascript", "React", "Redux", "Flask"],
      language: "Javascript",
      Link: "",
    },
    {
      title: "BeatJus_",
      image: "./images/about.png",
      technologies: ["HTML", "CSS", "Javascript", "React", "Redux", "Flask"],
      language: "Javascript",
      Link: "",
    },
    {
      title: "BeatJus_",
      image: "./images/about.png",
      technologies: ["HTML", "CSS", "Javascript", "React", "Redux", "Flask"],
      language: "Javascript",
      Link: "",
    },
    {
      title: "BeatJus_",
      image: "./images/about.png",
      technologies: ["HTML", "CSS", "Javascript", "React", "Redux", "Flask"],
      language: "Javascript",
      Link: "",
    },
    {
      title: "BeatJus_",
      image: "./images/about.png",
      technologies: ["HTML", "CSS", "Javascript", "React", "Redux", "Flask"],
      language: "Javascript",
      Link: "",
    },
    {
      title: "BeatJus_",
      image: "./images/about.png",
      technologies: ["HTML", "CSS", "Javascript", "React", "Redux", "Flask"],
      language: "Javascript",
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
