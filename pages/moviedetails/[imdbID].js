import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  const { imdbID } = router.query;
  const [film, setFilm] = useState(null);
  useEffect(() => {
    if(!router.isReady) return;
    try {
      axios
        .get(`https://www.omdbapi.com/?i=${imdbID}&apikey=263d22d8`)
        .then((response) => {
          let result = JSON.parse(JSON.stringify(response));
          let { data } = result;
          setFilm(data);
        });
    }catch (err) {
      console.log(err);
    }
  }, [router.isReady]);
  if (!film) return <div className="loading">Loading...</div>;

  return (
    <>
      <div className="container">
        <div className="imagediv">
        <img className="imagevar"
              src={film.Poster}
              alt={film.Title}
            />
        </div>
            <h1 className="varhtag">{film.Title}</h1>
            <div className="textdiv">
              <span >{film.Title}</span>
              <span >Director: {film.Type}</span>
              <div style={{ marginTop: "10px" }}>
                <div style={{ marginTop: "10px" }} >
                  Original Release:
                  <span >{film.Released}</span>
                </div>
                <div style={{ marginTop: "10px" }}>
                  Running Time:
                  <span >{film.Runtime}</span>
                </div>
                <div style={{ marginTop: "10px" }}>
                  Box Office:
                  <span >{film.BoxOffice}</span>
                </div>
                <div style={{ marginTop: "10px" }}>
                  IMDB Rating:
                  <span >{film.imdbRating}</span>
                Actors:
            <span >{film.Actors}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;