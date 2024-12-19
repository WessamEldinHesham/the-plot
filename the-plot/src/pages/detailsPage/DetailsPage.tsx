import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import MovieDetails from "../../components/movieDetails/MovieDetails";
import { getMovie } from "../../utils/http";
import Loading from "../../components/loading/Loading";

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

  if (!id) {
    return <div>Error: ID is missing in the URL</div>;
  }

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
    return <div>Error fetching movie details</div>;
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <MovieDetails movie={data} />
    </div>
  );
}
