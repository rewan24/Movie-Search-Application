// src/pages/Search.tsx
import React, { useState } from "react";
import { movies } from "../data/moviesData";
import MovieCard from "../components/MovieCard";
import './style2.css'

const Search: React.FC = () => {
  const [query, setQuery] = useState("");

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="clr"> 
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "20px", padding: "5px" }}
      />
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
