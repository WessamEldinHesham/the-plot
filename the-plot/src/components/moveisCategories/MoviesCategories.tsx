import React from "react";

import "./MoviesCategories.css";
import { useMoviesCategories } from "../../contexts/NavigationBarContext";

export default function MoviesCategories({
  moviesCategory,
  handleMoviesCategory,
  handleClosing,
  isVisible,
}: any) {
  const { searchBarInput } = useMoviesCategories();

  return (
    <>
      <div className="movies-categs-wrapper">
        <button
          className={`movies-categ-btn ${
            moviesCategory === "now_playing" && searchBarInput === ""
              ? "active"
              : ""
          }`}
          onClick={handleMoviesCategory}
          value="now_playing"
        >
          Now Playing
        </button>
        <button
          className={`movies-categ-btn ${
            moviesCategory === "popular" && searchBarInput === ""
              ? "active"
              : ""
          }`}
          onClick={handleMoviesCategory}
          value="popular"
        >
          Popular
        </button>
        <button
          className={`movies-categ-btn ${
            moviesCategory === "top_rated" && searchBarInput === ""
              ? "active"
              : ""
          }`}
          onClick={handleMoviesCategory}
          value="top_rated"
        >
          Top Rated
        </button>
        <button
          className={`movies-categ-btn ${
            moviesCategory === "upcoming" && searchBarInput === ""
              ? "active"
              : ""
          }`}
          onClick={handleMoviesCategory}
          value="upcoming"
        >
          Upcoming
        </button>
        {isVisible && (
          <button className="settings-close-btn" onClick={handleClosing}>
            X
          </button>
        )}
      </div>
    </>
  );
}
