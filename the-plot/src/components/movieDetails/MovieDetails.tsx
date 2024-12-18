import React from "react";

import "./MovieDetails.css";

export default function MovieDetails({ movie, posterPath }: any) {
  console.log(movie);
  return (
    <div className="movie-details__container">
      <img
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        loading="lazy"
        alt="Venom"
      />
      {/* <div className="movei-details-data">
        <h1>{movie.title}</h1>
      </div> */}
    </div>
  );
}
