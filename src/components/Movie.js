import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, genres, summary }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} />
      <h3 className={styles.title}>
        <Link
          to={`/movie/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {title}
        </Link>
      </h3>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <p>Summary : {summary === "" ? "no summary" : summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  summary: propTypes.string.isRequired,
};

export default Movie;
