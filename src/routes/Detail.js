import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "../css/Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(movie);
  };
  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: movie && `url(${movie.background_image_original})`,
      }}
    >
      {loading ? (
        <h1 className={styles.loadingText}>Loading...</h1>
      ) : (
        <MovieDetail
          id={movie.id}
          title={movie.title}
          title_long={movie.title_long}
          year={movie.year}
          rating={movie.rating}
          runtime={movie.runtime}
          genres={movie.genres}
          language={movie.language}
          description_intro={movie.description_intro}
          description_full={movie.description_full}
          background_image_original={movie.background_image_original}
          medium_cover_image={movie.medium_cover_image}
          yt_trailer_code={movie.yt_trailer_code}
          url={movie.url}
          imdb_code={movie.imdb_code}
          like_count={movie.like_count}
          torrents={movie.torrents}
        />
      )}
    </div>
  );
}
export default Detail;
