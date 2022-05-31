import Styles from "./Card.module.css";
export default function Card(props) {
  console.log(props);
  return (
    <div className={Styles.card} tabIndex="0">
      <div className={Styles.sample}>
        <img
          src={props.img}
          alt="Image of the website I have Created"
          className={Styles.img}
        />
        <div className={Styles.textContainer}>
          <h1>{props.title}</h1>
          <ul className={Styles.techList}>
            {props.tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{props.description}</p>
          <div className={Styles.links}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </div>
          <p className={Styles.moreInfo}>Click the card for more info</p>
        </div>
      </div>
      <div className={Styles.extra}>
        <div className={Styles.textContainer}>
          {props.extra.map((item, index) => (
            <>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
