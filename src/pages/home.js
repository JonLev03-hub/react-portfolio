import SideLinks from "../components/sideLinks";
import Article from "../components/article";
export default function Home() {
  return (
    <div className="home">
      <SideLinks />
      <Article>
        <h1>
          class <white>Jonathan</white> () &#123;
          <br />
        </h1>
        <p>
          <br />
          Constructor() &#123;
          <br />
          <h2>
             this.
            <strong>
              <white>name</white>
            </strong>{" "}
            =
            <strong>
              <white>"Jonathan Leverenz"</white>
            </strong>
            ,
            <br />
             this.
            <strong>
              <white>title</white>
            </strong>{" "}
            =
            <strong>
              <white>"Front-end Web Developer",</white>
            </strong>
          </h2>
          &#125;
        </p>
      </Article>
    </div>
  );
}
