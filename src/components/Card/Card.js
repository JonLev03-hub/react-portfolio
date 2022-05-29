import Styles from "./Card.module.css";
export default function Card(props) {
  console.log(props);
  return (
    <div className={Styles.card} tabIndex="0">
      <div className={Styles.sample}>
        <img src={props.img} alt="sample" className={Styles.img} />
        <h1>{props.title}</h1>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <ul className={Styles.techList}>
          {props.tech.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{props.description}</p>
      </div>
      <div className={Styles.extra}>
        {props.extra.map((item, index) => (
          <div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
