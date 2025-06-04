// src/pages/Home.tsx
import React, { useState } from "react";
import { movies } from "../data/moviesData";
import MovieCard from "../components/MovieCard";

const ITEMS_PER_PAGE = 2;

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedMovies = movies.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(movies.length / ITEMS_PER_PAGE);

  return (
    <div>
      <h2>Popular Movies</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {paginatedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button key={idx} onClick={() => setCurrentPage(idx + 1)} style={{ marginRight: "5px" }}>
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
