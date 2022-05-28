import Styles from "./Article.module.css";
export default function Article(props) {
  return <article className={Styles.article}>{props.children}</article>;
}
