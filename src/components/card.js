import Styles from "./card.module.css";
export default function Card(props) {
  console.log(props);
  //   return;
  return (
    <div className={Styles.card}>
      <img src={props.image} className={Styles.image}></img>
      <h1 className={Styles.h1}>{props.title}</h1>
      <p className={Styles.p}>{props.description}</p>
      <button>Learn More</button>
    </div>
  );
}
