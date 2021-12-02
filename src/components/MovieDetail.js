import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function MovieDetail({ bgImg, coverImg, title, summary, genres }) {
  return (
    <div
      className="container"
      style={{
        background: `url(${bgImg}) no-repeat center center/cover`,
      }}
    >
      <div className={styles.movie}>
        <h5 className={styles.movie__home}>
          <Link to={"/"}>Home</Link>
        </h5>
        <img src={coverImg} alt="" className={styles.movie__img} />
        <h2 className={styles.movie__title}>
          <Link to={"/"}>{title}</Link>
        </h2>
        <ul className={styles.movie__genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p>{summary}</p>
      </div>
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
