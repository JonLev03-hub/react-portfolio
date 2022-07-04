import Styles from "./Card.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MarkdownPopup(popupText, setPopupText) {
  var text = popupText.popupText;
  const clearPopup = () => {
    setPopupText("");
  };
  if (text) {
    return (
      <div className={Styles.container} onClick={clearPopup}>
        <div className={Styles.document}>{text}</div>
      </div>
    );
  } else {
    return;
  }
}

export default function Card(props) {
  const [popupText, setPopupText] = useState("");
  const togglePopup = async () => {
    try {
      const split = props.github.split("/");
      const repo = split[split.length - 1];
      const url = `https://raw.githubusercontent.com/JonLev03-hub/${repo}/main/README.md`;
      const result = await axios.get(url);
      setPopupText(result.data);
    } catch (err) {
      console.log(err);
      setPopupText(
        "An error has occured when getting the description from github. To view more information please click the github link on the card."
      );
    }
  };

  return (
    <>
      {popupText && (
        <div className={Styles.container}>
          <div className={Styles.document}>
            <button className={Styles.close} onClick={() => setPopupText("")}>
              +
            </button>
            {popupText}
          </div>
        </div>
      )}
      <div className={Styles.card} onClick={togglePopup}>
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
          <div className={Styles.links}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
