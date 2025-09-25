import React from "react";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import MovieCard from "./components/MovieCard";
import Counter from "./components/Counter";
import BackgroundColorChanger from "./components/BackgroundColorChanger";

function App() {
  const movies = [
    { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
    { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
    { title: "Interstellar", year: 2014, rating: 8.6, genre: "Adventure" },
  ];

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="card shadow-lg p-3 mb-5 bg-body rounded text-center">
        <div className="card-body">
          <h1 className="card-title text-primary">Welcome to My React App 🚀</h1>
          <h3 className="card-text text-success">Hello I'm Tejaswini H</h3>
          <p className="text-warning fs-4">
            Start learning code with fun using React + Bootstrap
          </p>
        </div>
      </div>

      {/* Welcome Message */}
      <WelcomeMessage />

      {/* Counter */}
      <h2 className="mb-3">🧮 Counter Example</h2>
      <Counter />

      {/* Movie List */}
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

      {/* Other Components */}
     <div className="container text-center mt-4">
      <h1 className="text-white">Welcome! 🎨</h1>
      <BackgroundColorChanger />
    </div>

      </div>
    </div>
  );
}

export default App;
