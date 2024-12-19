import React from "react";

import "./MoviesCategories.css";
import { useMoviesCategories } from "../../contexts/NavigationBarContext";

export default function MoviesCategories({
  moviesCategory,
  handleMoviesCategory,
}: any) {
  const { searchBarInput } = useMoviesCategories();
  // const [isOpen, setIsOpen] = useState<Boolean>(false);
  // const [isVisible, setIsVisible] = useState<Boolean>(false);
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

        <button
          className="settings-close-btn"
          onClick={() => {
            return;
          }}
        >
          X
        </button>
      </div>
    </>
  );
}
