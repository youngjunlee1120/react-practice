import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieDetail({
  id,
  title,
  title_long,
  year,
  rating,
  runtime,
  genres,
  language,
  description_intro,
  description_full,
  // background_image_original은 UI에 직접 표시하지 않으므로 사용하지 않음
  medium_cover_image,
  yt_trailer_code,
  url,
  imdb_code,
  like_count,
  torrents,
}) {
  return (
    <div className="movie-detail-container">
      {/* 제목 및 기본 정보 */}
      <div className="header">
        <h1>{title_long}</h1>
        <div className="info-bar">
          <p>⭐ **평점:** {rating}/10</p>
          <p>⏱️ **런타임:** {runtime}분</p>
          <p>👍 **좋아요:** {like_count}개</p>
        </div>
      </div>

      {/* 포스터만 표시 */}
      <div className="image-section">
        <img src={medium_cover_image} alt={title} className="cover-image" />
      </div>

      {/* 상세 줄거리 */}
      <div className="description-section">
        <h2>줄거리</h2>
        <p>
          {description_full || description_intro || "줄거리 정보가 없습니다."}
        </p>
      </div>

      {/* 추가 정보 */}
      <div className="details-section">
        <p>**장르:** {genres.join(", ")}</p>
        <p>**언어:** {language}</p>
        <p>**제작 연도:** {year}</p>
      </div>

      {/* 외부 링크 */}
      <div className="links-section">
        {imdb_code && (
          <a
            href={`https://www.imdb.com/title/${imdb_code}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDb 페이지
          </a>
        )}
        {yt_trailer_code && (
          <a
            href={`https://www.youtube.com/watch?v=${yt_trailer_code}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            예고편 보기
          </a>
        )}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            YTS 페이지
          </a>
        )}
      </div>

      {/* 토렌트 정보 */}
      {torrents && torrents.length > 0 && (
        <div className="torrents-section">
          <h3>다운로드</h3>
          <ul>
            {torrents.map((torrent, index) => (
              <li key={index}>
                <a href={torrent.url} target="_blank" rel="noopener noreferrer">
                  {torrent.quality} ({torrent.size}) - {torrent.type}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="back-link">
        <Link to="/">목록으로 돌아가기</Link>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  title_long: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  language: PropTypes.string.isRequired,
  description_intro: PropTypes.string,
  description_full: PropTypes.string,
  background_image_original: PropTypes.string, // props로 계속 받음
  medium_cover_image: PropTypes.string.isRequired,
  yt_trailer_code: PropTypes.string,
  url: PropTypes.string,
  imdb_code: PropTypes.string,
  like_count: PropTypes.number,
  torrents: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      quality: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};

export default MovieDetail;
