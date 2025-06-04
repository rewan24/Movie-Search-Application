// src/components/MovieCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { Movie } from "../data/moviesData";
import './style.css'

interface Props {
  movie: Movie;
  onDelete?: (id: number) => void;
  onEdit?: (movie: Movie) => void;
}

const MovieCard: React.FC<Props> = ({ movie, onDelete, onEdit }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card" style={{ border: "1px solid #ccc", padding: "10px", width: "200px", 
    borderRadius:"10px" ,

    }}>
      <Link to={`/movie/${movie.id}`}>
        <img src={imageUrl} alt={movie.title} style={{ width: "100%" }} />
      </Link>
      <h3>{movie.title}</h3>

      {/* Show buttons only if handlers are passed */}
      {onEdit && onDelete && (
        <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
          <button onClick={() => onEdit?.(movie)}>Edit</button>
          <button onClick={() => onDelete?.(movie.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
