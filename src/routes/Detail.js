import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const body = document.querySelector("body");
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
  useEffect(() => {
    if (details !== []) {
      body.style.background = `url(${details.background_image}), rgba(0, 0, 0, 0.6)`;
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundSize = "cover";
      body.style.backgroundBlendMode = "multiply";
      console.log(details);
    }
  }, [details]);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div>
          <div className={styles.imgContainer}>
            <img src={details.large_cover_image} alt={details.title_long} />
          </div>
          <div className={styles.detailContainer}>
            <h1>{details.title_long}</h1>
            <span>Rating : {details.rating}★</span>

            <p>{details.description_full}</p>
            <span>
              <a
                href={`https://www.youtube.com/watch?v=${details.yt_trailer_code}`}
              >
                Go To See Trailer On Youtube
              </a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
