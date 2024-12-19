import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import MovieDetails from "../../components/movieDetails/MovieDetails";
import { getMovie } from "../../utils/http";
import Loading from "../../components/loading/Loading";

import "../home/HomePage.css";

type RouteParams = {
  id: string;
};

export default function DetailsPage() {
  const { id } = useParams<RouteParams>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovie(id as string),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div
        className="Loading-div-homepage"
        style={{ textAlign: "center", margin: "4rem auto" }}
      >
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-message">
        <h1>Something went wrong!</h1>
      </div>
    );
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <MovieDetails movie={data} />
    </div>
  );
}
