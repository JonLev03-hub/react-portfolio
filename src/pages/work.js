import { motion } from "framer-motion";
import styles from "./work.module.css";
import CardTable from "../components/cardTable.js";
export default function Work({ transition }) {
  return (
    <motion.div
      className="work"
      initial="out"
      animate="in"
      exit="out"
      variants={transition}
    >
      <CardTable />
    </motion.div>
  );
}
