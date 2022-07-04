import Styles from "./Work.module.css";
import Card from "../../components/Card/Card";
import { cards } from "../../data";
export default function Work() {
  return (
    <>
      <h1 className={Styles.header}>this.work</h1>
      <div className={Styles.container}>
        {cards.map((card) => (
          <Card
            img={card.img}
            title={card.title}
            md={card.description}
            link={card.link}
            github={card.github}
            tech={card.tech}
          />
        ))}
      </div>
    </>
  );
}
