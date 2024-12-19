import React from "react";
import { useNavigate } from "react-router-dom";

import "./MovieCard.css";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieCardProps {
  movie: IMovie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();

  function movieHandle() {
    navigate(`movieDetails/${movie.id}`);
  }

  return (
    <>
      <div className="movie-card" onClick={movieHandle}>
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          className="movie-img"
        />
        <div className="movie-dets">
          <h3 className="movie-title">{movie?.title}</h3>
          <div className="date-rate-div">
            <p className="movie-date">{movie?.release_date}</p>
            <p className="movie-rate">
              {movie?.vote_average == 0
                ? "NR"
                : parseFloat(movie?.vote_average.toFixed(1))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
