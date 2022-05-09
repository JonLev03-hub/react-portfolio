import SideLinks from "../components/sideLinks";
import Article from "../components/article";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="about">
      <SideLinks />
      <Article>
        <h1>
          const <white>skills</white> = () =&gt; &#123;
          <br />
        </h1>
        <p>
          const skills = &#123;  "Languages" : [ "Python" , "Javascript",
          "HTML/Css", "MySQL"]  "General" : ["AWS"]  "Data-analytics" :
          ["Pandas", "Tensorflow", "Tableau", "Statistics"]  "Web-development" :
          ["React", "Redux",]  "Soft-skills" : ["Problem Solving", "Learning",
          "Communication"] &#125;; console.log(skills);
        </p>
        <h1>&#125;;</h1>
      </Article>
    </div>
  );
}
