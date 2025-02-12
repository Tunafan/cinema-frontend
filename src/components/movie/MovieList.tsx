import { Link } from "react-router-dom";
import "./MoviesLayout.css";
import { useEffect, useState } from "react";
import { getMovies, Movie as APIMovie } from "../../services/apiFacade";

export default function MovieList() {
  const [movies, setMovies] = useState<Array<APIMovie>>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => { 
      try {
        const movies = await getMovies(); 
        setMovies(movies);
      } catch (error) {
        setError("Error loading movies, is the server running?");
      }
    };

    fetchMovies();
  }, []);

  const movieListItems = movies.map((movie) => {
    return (
      <li key={movie.id}>
        <Link to={`${movie.id}`}>{movie.name}</Link>
      </li>
    );
  });

  if (error !== "") {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }
  return (
    <>
      <h3>Movies</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>{movieListItems}</ul>
    </>
  );
}
