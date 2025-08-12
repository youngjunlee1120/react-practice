import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title_long, rating, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title_long} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title_long}(⭐{rating}/10)
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
