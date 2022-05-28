import Article from "../../components/Article/Article.js";
export default function Skills() {
  return (
    <Article>
      <h1>
        const <white>skills</white> = () =&gt; &#123;
        <br />
      </h1>
      <p>
        const skills = &#123; <br />
      </p>
      <p style={{ paddingLeft: "20px" }}>
        "
        <strong>
          <white>Languages</white>
        </strong>
        " : [ "<white>Python</white>", "<white>Javascript</white>", "
        <white>HTML/Css</white>", "<white>MySQL</white>"] <br />"
        <strong>
          <white>General</white>
        </strong>
        " : ["<white>AWS</white>"] <br />"
        <strong>
          <white>Data-analytics</white>
        </strong>
        " : ["<white>Pandas</white>", "<white>Tensorflow</white>", "
        <white>Tableau</white>", "<white>Statistics</white>"]
        <br />"
        <strong>
          <white>Web-development</white>
        </strong>
        " : ["<white>React</white>", "<white>Redux</white>", "
        <white>Flask</white>"] <br />"
        <strong>
          <white>Soft-skills</white>
        </strong>
        " : ["<white>Problem Solving</white>", "<white>Learning</white>", "
        <white>Communication</white>"]{" "}
      </p>
      <p>&#125;; console.log(skills);</p>
      <h1>&#125;;</h1>
    </Article>
  );
}
