import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import MovieCard from "../../components/movieCard/MovieCard";
import PaginationComp from "../../components/pagination/PaginationComp";
import { getMovies } from "../../utils/http";

import "./HomePage.css";
import Loading from "../../components/loading/Loading";

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
  const [pageNo, setPageNo] = useState<number>(1);

  const { data, isPending }: any = useQuery({
    queryKey: ["movies", pageNo],
    queryFn: () => getMovies(pageNo),
  });

  if (isPending) {
    return (
      <div style={{ textAlign: "center", margin: "4rem auto" }}>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="home-container">
        <ul className="movies-items">
          {data?.movies?.map((movie: IMovie) => {
            return (
              <li className="" key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="home-pagination__container">
        <PaginationComp
          pageNo={pageNo}
          setPageNo={setPageNo}
          pages={data.pages}
        />
      </div>
    </>
  );
}
