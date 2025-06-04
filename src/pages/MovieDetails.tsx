// src/pages/MovieDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/moviesData";
import './style2.css'

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div style={{ height: "100vh" }} className="clr">
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px" }}
      />
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
