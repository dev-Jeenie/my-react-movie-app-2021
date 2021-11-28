import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json);
    console.log(detail.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <h1>Detail</h1>
      <div>
        <img
          src={detail?.data?.movie?.large_cover_image}
          alt={detail?.data?.movie?.title}
        />
        <h2>{detail?.data?.movie?.title_long}</h2>
        <ul>
          {detail.data?.movie?.genres?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <p>{detail.data?.movie?.description_full}</p>
      </div>
    </>
  );
};
export default Detail;
