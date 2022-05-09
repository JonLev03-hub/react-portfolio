import SideLinks from "../components/sideLinks";
import Article from "../components/article";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <SideLinks />
      <Article>
        <h1>
          class Jonathan () &#123;
          <br />
        </h1>
        <p>
          Constructor() &#123;
          <br />
          <p>
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
          </p>
          &#125;
        </p>
      </Article>
    </div>
  );
}
