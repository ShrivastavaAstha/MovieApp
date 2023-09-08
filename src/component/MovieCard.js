import React from "react";

const MovieCard = ({ movie }) => {
  const posterurl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
  return (
    <div>
      <h2 style={{ color: "black" }}>Movie Name: {movie.title}</h2>
      <h4 style={{ color: "pink" }}>Release Date: {movie.release_date}</h4>
      <img src={posterurl} alt={movie.title} />
      <h5 style={{ color: "pink" }}>
        Movie Language: {movie.original_language}
      </h5>
      <h5 style={{ color: "pink" }}>Popularity: {movie.popularity}</h5>
      <h4 style={{ color: "white" }}>
        <b> A short description about {movie.title}</b>
      </h4>
      <p style={{ color: "yellow" }}>{movie.overview}</p>
      <br />
      <br />
    </div>
  );
};

export default MovieCard;
