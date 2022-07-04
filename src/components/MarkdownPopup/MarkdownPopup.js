import { useEffect } from "react";
import Styles from "./MarkdownPopup.module.css";
export default function MarkdownPopup(popupText, setPopupText) {
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
