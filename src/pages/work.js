import CardTable from "../components/cardTable";
import styles from "./work.module.css";
export default function Work() {
  return (
    <div className="work">
      <CardTable>
        <h1 className={styles.h1}>My Work &#123;</h1>
      </CardTable>
    </div>
  );
}
