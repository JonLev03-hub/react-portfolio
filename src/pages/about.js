import SideLinks from "../components/sideLinks";
import Article from "../components/article";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="about">
      <SideLinks />
      <Article>
        <h1>
          const <white>about</white> = () =&gt; &#123;
          <br />
        </h1>
        <p>
          console.log(" <br />
          <white>
            My name is Jonathan Leverenz, and I specialize in building unique
            websites for businesses! I have experience using HTML, Css,
            Javascript, and React; and that's just the start.
          </white>
          <br />
          ");
          <br />
          <br />
          console.log("
          <white>To get a better idea of what I do please see </white>
          <Link to="/skills">this.Skills()</Link> ")
        </p>
        <h1>&#125;;</h1>
      </Article>
    </div>
  );
}
