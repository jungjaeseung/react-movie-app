import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h3>{details.title_long}</h3>
          <img src={details.large_cover_image} alt={details.title_long} />
          <span>Rating : {details.rating}★</span>
          <p>Description : {details.description_full}</p>
          <span>
            <a
              href={`https://www.youtube.com/watch?v=${details.yt_trailer_code}`}
            >
              Go To See Trailer On Youtube
            </a>
          </span>
        </div>
      )}
    </div>
  );
}

export default Detail;
