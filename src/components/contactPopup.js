import styles from "./contactPopup.module.css";
import { useState } from "react";
export default function ContactForm({ show, contactFunction }) {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className={styles.backdrop} onClick={contactFunction}></div>
      <form className={styles.form}>
        <h1>Contact Me</h1>
        <input type="text" name="name" placeholder="Name" />
        <input
          type="text"
          name="company"
          placeholder="Company Name (If Applicable)"
        />
        <input type="email" name="email" placeholder="Email" />
        <input type="tel" name="phone" placeholder="Phone Number" />
        <textarea name="message" placeholder="Message" rows="5" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
