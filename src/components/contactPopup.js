import styles from "./contactPopup.module.css";

function ContactForm() {
  return (
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
  );
}

export default function model() {
  return (
    <div className={styles.backdrop}>
      <ContactForm />
    </div>
  );
}
