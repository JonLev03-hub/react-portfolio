import SideLinks from "../components/sideLinks";
import Article from "../components/article";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function About({ transition }) {
  return (
    <motion.div
      className="about"
      initial="out"
      animate="in"
      exit="out"
      variants={transition}
    >
      <SideLinks />
      <Article>
        <h1>
          const <white>about</white> = () =&gt; &#123;
          <br />
        </h1>
        <p>
          console.log(" <br />
          <white>
            My name is Jonathan Leverenz. I specialize in building unique
            websites for businesses! I have experience using HTML, Css,
            Javascript, and React; and that's just the start.
          </white>
          <br />
          ");
          <br />
          <br />
          console.log("
          <white>
            {" "}
            To get a better idea of what I do checkout my general resume{" "}
          </white>
          <a href="./assets/JonathanLeverenz.pdf" target="_blank">
            this.Resume()
          </a>{" "}
          ")
        </p>
        <h1>&#125;;</h1>
      </Article>
    </motion.div>
  );
}
