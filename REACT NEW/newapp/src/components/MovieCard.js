import React from "react";

function MovieCard({ title, year, rating, genre }) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{year}</h6>
        <p className="card-text">
          <strong>Genre:</strong> {genre} <br />
          <strong>Rating:</strong> ⭐ {rating}/10
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
