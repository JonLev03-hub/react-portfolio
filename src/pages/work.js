import { motion } from "framer-motion";
import CardTable from "../components/cardTable";
import styles from "./work.module.css";
export default function Work({ transition }) {
  return (
    <motion.div
      className="work"
      initial="out"
      animate="in"
      exit="out"
      variants={transition}
    >
      <CardTable>
        <h1 className={styles.h1}>My Work &#123;</h1>
      </CardTable>
    </motion.div>
  );
}
