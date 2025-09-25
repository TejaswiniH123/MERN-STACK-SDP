import React from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const movies = [
    { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
    { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
    { title: "Interstellar", year: 2014, rating: 8.6, genre: "Adventure" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-3">🎬 Movie List</h2>
      <div className="d-flex flex-wrap">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            genre={movie.genre}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
