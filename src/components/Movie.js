import propTypes from "prop-types";
function Movie({ coverImg, title, genres, summary }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h3>{title}</h3>
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
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  summary: propTypes.string.isRequired,
};

export default Movie;
