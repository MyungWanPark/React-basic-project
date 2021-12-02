import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function MovieDetail({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="" />
      <h2>
        <Link to={"/"}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieDetail;
