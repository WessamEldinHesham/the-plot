import React from "react";

import { convertDate } from "../../utils/helperFunctions";

import "./MovieDetails.css";

interface IGenres {
  id: number;
  name: string;
}

export default function MovieDetails({ movie }: any) {
  function getGenres(genres: IGenres[]) {
    const genresArr = genres.map((genre) => {
      return genre.name;
    });
    return genresArr;
  }

  return (
    <>
      <div className="movie-div-container">
        <div className="movie-div">
          <div className="movie-img-div">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className="movie-det-img"
            ></img>
          </div>
          <div className="movie-data-div">
            <h1 className="movie-detail-title">{movie.title}</h1>
            <h2 className="movei-tagline">{movie.tagline}</h2>
            <div className="movie-genre-date-div">
              <div className="movie-genre-div">
                {getGenres(movie.genres).map((genre, index) => {
                  return index == movie.genres.length - 1 ? (
                    <p key={genre} className="movie-genre">
                      {genre}
                    </p>
                  ) : (
                    <p key={genre} className="movie-genre">
                      {genre},
                    </p>
                  );
                })}
              </div>
              <p className="movie-dets-date">
                {convertDate(movie.release_date)}
              </p>
            </div>
            <p className="movie-overview">{movie.overview}</p>
            <div className="movie-revenue-runtime-div">
              <p className="movie-runtime">
                Duration:<span>{movie.runtime}</span> min
              </p>
              <p className="movie-revenue">
                Revenue <span>{movie.revenue}</span>
              </p>
            </div>
            <button className="movie-url">
              <a href={movie.homepage} target="_blank">
                Watch
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
