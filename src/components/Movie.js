import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, genres, summary, year, rating }) {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className={styles.movie}>
      <Link
        onMouseOver={() => {
          setIsOn(true);
        }}
        onMouseOut={() => {
          setIsOn(false);
        }}
        className={styles.imgLink}
        to={`/movie/${id}`}
      >
        {isOn ? (
          <div className={styles.blackbox}>
            <span>★{rating}</span>
          </div>
        ) : null}
        <img src={coverImg} alt={title} />
      </Link>

      <div>
        <h2 className={styles.title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <span className={styles.year}>{year}</span>
        <p>
          {summary === ""
            ? "no summary"
            : summary.length > 180
            ? `${summary.slice(0, 180)}...`
            : summary}
        </p>
        <ul className={styles.genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  summary: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
};

export default Movie;
