import Styles from "./Work.module.css";
import Card from "../../components/Card/Card";
export default function Work() {
  const cards = [
    {
      img: "./images/BeatJus.png",
      title: "BeatJus",
      description:
        "BeatJus is a web portfolio designed for a videographer. The purpose of this site is to display his work and direct potential clients to his services.",
      link: "https://www.beatjus.com/",
      github: "",
      tech: ["HTML", "CSS", "JavaScript"],
      extra: [
        {
          title: "My Responsibilities :",
          content:
            "Durring this project I was responsible for designing and building the front end, as well as hosting the site and maintaining any issues that may arise.",
        },
        {
          title: "Problems :",
          content:
            "The development of this site had run relatively smoothly since it is a small project but the alrgest problem that had occured was designing the site. With a website like this your goal is to display the work of the client as best as possible but when working with this client they did not have much content to display yet. The current design was made to be able to easily grow with the client and with minor adjustment you can make the website display large portfolios with ease.",
        },
      ],
    },
  ];
  return (
    <>
      <h1 className={Styles.header}>Projects</h1>
      <div className={Styles.container}>
        {cards.map((card) => (
          <Card
            img={card.img}
            title={card.title}
            description={card.description}
            link={card.link}
            github={card.github}
            tech={card.tech}
            myResponsibilitys={card.myResponsibilitys}
            problems={card.problems}
            extra={card.extra}
          />
        ))}
      </div>
    </>
  );
}
