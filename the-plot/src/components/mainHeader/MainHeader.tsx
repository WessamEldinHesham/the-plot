import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MoviesCategories from "../moveisCategories/MoviesCategories";
import { useMoviesCategories } from "../../contexts/NavigationBarContext";

import "./MainHeader.css";
import SettingsLogo from "../settingsLogo/SettingsLogo";

export default function MainHeader() {
  const [searchInput, setSearchInput] = useState<string>("");
  const { moviesCategory, setMoviesCategory, setSearchBarInput, setPageNo } =
    useMoviesCategories();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleHomeRouting() {
    setPageNo(1);
    setSearchInput("");
    setSearchBarInput("");
    setMoviesCategory("now_playing");
    navigate("/");
  }

  function handleMoviesCategory(
    event: React.MouseEvent<HTMLButtonElement> | any
  ) {
    const buttonName: string = event.target.value;
    setPageNo(1);
    setSearchBarInput("");
    setSearchInput("");
    setMoviesCategory(buttonName);
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 350);
  }

  function searchHandler(event: React.ChangeEvent<HTMLInputElement> | any) {
    setSearchInput(event?.target?.value);
  }

  const handleSubmit = (e: React.FormEvent | any) => {
    e.preventDefault();
    setSearchBarInput(searchInput);
  };

  function handleOpening() {
    setIsVisible(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 10);
  }

  function handleClosing() {
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 350);
  }

  function handleBack() {
    navigate("/");
  }

  return (
    <>
      <div className="main-header-container">
        <header className="main-header">
          <h1 className="main-header-logo" onClick={handleHomeRouting}>
            The Plot
          </h1>
          {window.location.pathname !== "/" && (
            <button className="main-header-bk-btn" onClick={handleBack}>
              Back
            </button>
          )}

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
            {window.location.pathname !== "/" && (
              <button className="main-header-bk-btn" onClick={handleBack}>
                Back
              </button>
            )}
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
            {window.location.pathname !== "/" && (
              <button className="main-header-bk-btn" onClick={handleBack}>
                Back
              </button>
            )}
            {window.location.pathname === "/" && (
              <button className="settings-btn" onClick={handleOpening}>
                <SettingsLogo />
              </button>
            )}
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
              {isVisible && (
                <>
                  <div
                    className={`moveis-cats-smaller-mobile ${
                      isOpen
                        ? "moveis-cats-smaller-mobile-active"
                        : "moveis-cats-smaller-mobile-hidden"
                    }`}
                  >
                    <MoviesCategories
                      handleMoviesCategory={handleMoviesCategory}
                      moviesCategory={moviesCategory}
                      handleClosing={handleClosing}
                      isVisible={isVisible}
                      isOpen={isOpen}
                    />
                  </div>
                  <div
                    className={`background-drop ${
                      isOpen
                        ? "background-drop-active"
                        : "background-drop-hidden"
                    }`}
                    onClick={handleClosing}
                  ></div>
                </>
              )}
            </>
          )}
        </header>
      </div>
    </>
  );
}
