import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "../components/MovieDetail.module.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <MovieDetail
            bgImg={movie.background_image}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.description_full}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
