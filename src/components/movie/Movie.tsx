import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Movie } from "../../services/apiFacade";
import { getMovie } from "../../services/apiFacade";

export default function Movie() {
  const { id } = useParams();
  console.log("id", id);

  const [movie, setMovie] = useState<Movie | null>(null); 
  useEffect(() => {
    getMovie(Number(id)).then((res: Movie) => setMovie(res));
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <h3>
            {movie.name} ({movie.id})
          </h3>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: 200, margin: 10, flexDirection: "column" }}
              src={movie.poster}
              alt={movie.name}
            />
            <p style={{ display: "inline", flexDirection: "column" }}>
              {movie.duration} min
            </p>
          </div>
          <hr />
          <p style={{ whiteSpace: "pre-wrap" }}>{movie.description}</p>
        </>
      ) : (
        <h2>Movie not found :'(</h2>
      )}
    </>
  );
}
