import React, { useState } from "react";
import { movies as initialMovies } from "../data/moviesData";
import type { Movie } from "../data/moviesData";
import MovieCard from "../components/MovieCard";
import './style2.css'

const Home: React.FC = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>(initialMovies);

  // Handle DELETE
  const handleDelete = (id: number) => {
    const updated = moviesList.filter(movie => movie.id !== id);
    setMoviesList(updated);
  };

  // Handle EDIT (simulate title update)
  const handleEdit = (movie: Movie) => {
    const newTitle = prompt("Enter new title", movie.title);
    if (newTitle) {
      const updated = moviesList.map(m =>
        m.id === movie.id ? { ...m, title: newTitle } : m
      );
      setMoviesList(updated);
    }
  };

  // Handle ADD
  const handleAdd = () => {
    const title = prompt("Enter movie title");
    const overview = prompt("Enter overview");
    const poster_path = prompt("Enter poster path (e.g. /abc.jpg)");

    if (title && overview && poster_path) {
      const newMovie: Movie = {
        id: Date.now(),
        title,
        overview,
        poster_path,
      };
      setMoviesList([...moviesList, newMovie]);
    }
  };

  return (
    <div className="clr">
      <h2>Popular Movies</h2>
      <button onClick={handleAdd} style={{ marginBottom: "20px" }}>
        ➕ Add Movie
      </button>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {moviesList.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
