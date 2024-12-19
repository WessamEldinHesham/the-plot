import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MoviesCategories from "../moveisCategories/MoviesCategories";
import { useMoviesCategories } from "../../contexts/NavigationBarContext";

import "./MainHeader.css";
import SettingsLogo from "../settingsLogo/SettingsLogo";

export default function MainHeader() {
  const [searchInput, setSearchInput] = useState<string>("");
  const { moviesCategory, setMoviesCategory, setSearchBarInput } =
    useMoviesCategories();
  const navigate = useNavigate();

  function handleHomeRouting() {
    setSearchInput("");
    setSearchBarInput("");
    setMoviesCategory("now_playing");
    navigate("/");
  }

  function handleMoviesCategory(
    event: React.MouseEvent<HTMLButtonElement> | any
  ) {
    const buttonName: string = event.target.value;
    setSearchBarInput("");
    setSearchInput("");
    setMoviesCategory(buttonName);
  }

  function searchHandler(event: React.ChangeEvent<HTMLInputElement> | any) {
    setSearchInput(event?.target?.value);
  }

  const handleSubmit = (e: React.FormEvent | any) => {
    e.preventDefault();
    setSearchBarInput(searchInput);
  };

  return (
    <>
      <div className="main-header-container">
        <header className="main-header">
          <h1 className="main-header-logo" onClick={handleHomeRouting}>
            The Plot
          </h1>

          {window.location.pathname === "/" ? (
            <>
              <form onSubmit={handleSubmit} className="search-bar-div">
                <input
                  type="text"
                  id="searchBarInput"
                  value={searchInput}
                  className="search-bar-input"
                  onChange={searchHandler}
                />
                {searchInput && (
                  <button
                    type="button"
                    className="search-delete-button"
                    onClick={() => {
                      setSearchInput("");
                      setSearchBarInput("");
                      setMoviesCategory("now_playing");
                    }}
                  >
                    X
                  </button>
                )}
                <button type="submit" className="search-bar-btn">
                  Search
                </button>
              </form>
              <div>
                <MoviesCategories
                  handleMoviesCategory={handleMoviesCategory}
                  moviesCategory={moviesCategory}
                />
              </div>
            </>
          ) : (
            ""
          )}
        </header>
      </div>
      <div className="main-header-container-mobile">
        <header className="main-header-movile">
          <div className="first-mobile-header">
            <h1 className="main-header-logo" onClick={handleHomeRouting}>
              The Plot
            </h1>
            {window.location.pathname === "/" ? (
              <form onSubmit={handleSubmit} className="search-bar-div">
                <input
                  type="text"
                  id="searchBarInput"
                  value={searchInput}
                  className="search-bar-input"
                  onChange={searchHandler}
                />
                {searchInput && (
                  <button
                    type="button"
                    className="search-delete-button"
                    onClick={() => {
                      setSearchInput("");
                      setSearchBarInput("");
                      setMoviesCategory("now_playing");
                    }}
                  >
                    X
                  </button>
                )}
                <button type="submit" className="search-bar-btn">
                  Search
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
          {window.location.pathname === "/" && (
            <div className="moveis-cats-mobile">
              <MoviesCategories
                handleMoviesCategory={handleMoviesCategory}
                moviesCategory={moviesCategory}
              />
            </div>
          )}
        </header>
      </div>
      <div className="main-header-smaller-mobile-container">
        <header className="main-header-smaller-movile">
          <div className="main-header-smaller-mobile-logo-settings-div">
            <h1 className="main-header-logo" onClick={handleHomeRouting}>
              The Plot
            </h1>
            <button className="settings-btn">
              <SettingsLogo />
            </button>
          </div>

          {window.location.pathname === "/" ? (
            <form onSubmit={handleSubmit} className="search-bar-div">
              <input
                type="text"
                id="searchBarInput"
                value={searchInput}
                className="search-bar-input"
                onChange={searchHandler}
              />
              {searchInput && (
                <button
                  type="button"
                  className="search-delete-button"
                  onClick={() => {
                    setSearchInput("");
                    setSearchBarInput("");
                    setMoviesCategory("now_playing");
                  }}
                >
                  X
                </button>
              )}
              <button type="submit" className="search-bar-btn">
                Search
              </button>
            </form>
          ) : (
            ""
          )}
          {window.location.pathname === "/" && (
            <>
              <div className="moveis-cats-smaller-mobile">
                <MoviesCategories
                  handleMoviesCategory={handleMoviesCategory}
                  moviesCategory={moviesCategory}
                />
              </div>
              <div className="background-drop"></div>
            </>
          )}
        </header>
      </div>
    </>
  );
}
