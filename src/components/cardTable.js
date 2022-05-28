import Styles from "./cardTable.module.css";
import Card from "./card.js";
export default function CardTable() {
  const cards = [
    {
      title: "Card 1",
      description: "This is the first card",
      tech: ["React", "Redux", "Node", "Express", "MongoDB"],
      image: "./images/BeatJus.png",
      links: [
        {
          text: "Link 1",
          url: "https://www.google.com",
        },
        {
          text: "Link 2",
          url: "https://www.google.com",
        },
      ],
      extraContent: [
        {
          title: "Extra Content 1",
          text: "https://www.google.com",
        },
        {
          title: "Extra Content 2",
          text: "https://www.google.com",
        },
      ],
    },
  ];
  return (
    <div className={Styles.cardTable}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
