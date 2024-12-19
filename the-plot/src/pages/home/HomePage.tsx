import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import MovieCard from "../../components/movieCard/MovieCard";
import PaginationComp from "../../components/pagination/PaginationComp";
import { getMovies, getSearchedMovies } from "../../utils/http";

import "./HomePage.css";
import Loading from "../../components/loading/Loading";
import { useMoviesCategories } from "../../contexts/NavigationBarContext";

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

export default function HomePage() {
  const { moviesCategory, searchBarInput } = useMoviesCategories();
  const [pageNo, setPageNo] = useState<number>(1);

  const moviesQuery: any = useQuery({
    queryKey: ["movies", pageNo, moviesCategory],
    queryFn: () => getMovies(pageNo, moviesCategory),
    enabled: !!searchBarInput === false,
  });

  const searchQuery: any = useQuery({
    queryKey: ["seachedMovies", searchBarInput, pageNo],
    queryFn: () => getSearchedMovies(searchBarInput, pageNo),
    enabled: !!searchBarInput,
  });

  if (searchBarInput === "") {
    if (moviesQuery.isPending) {
      return (
        <div className="Loading-div-homepage" style={{ textAlign: "center", margin: "4rem auto" }}>
          <Loading />
        </div>
      );
    }

    if (moviesQuery.isError) {
      return <div>Something wrong happed</div>;
    }
  } else if (searchBarInput !== "") {
    if (searchQuery.isPending) {
      return (
        <div className="Loading-div-homepage" style={{ textAlign: "center", margin: "4rem auto" }}>
          <Loading />
        </div>
      );
    }
    if (searchQuery.isError) {
      return <div>Something wrong happed</div>;
    }
  }

  return (
    <>
      <div className="home-container">
        <ul className="movies-items">
          {searchBarInput !== "" ? (
            <>
              {searchQuery.data?.movies?.map((movie: IMovie) => {
                return (
                  <li className="" key={movie.id}>
                    <MovieCard movie={movie} />
                  </li>
                );
              })}
            </>
          ) : (
            <>
              {moviesQuery.data?.movies?.map((movie: IMovie) => {
                return (
                  <li className="" key={movie.id}>
                    <MovieCard movie={movie} />
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
      {searchBarInput !== "" ? (
        <>
          {searchQuery.data?.pages.length > 0 && (
            <div className="home-pagination__container">
              <PaginationComp
                pageNo={pageNo}
                setPageNo={setPageNo}
                pages={searchQuery.data.pages}
              />
            </div>
          )}
        </>
      ) : (
        <>
          {moviesQuery.data.pages.length > 0 && (
            <div className="home-pagination__container">
              <PaginationComp
                pageNo={pageNo}
                setPageNo={setPageNo}
                pages={moviesQuery.data.pages}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}
