React Movies Website

Brief Description

This project is a website that showcases the latest and most popular movies. It provides tabs to switch between the following categories:

Now Playing: Movies currently in cinemas.

Popular: Trending movies.

Top Rated: All-time highest-rated movies.

Upcoming: Movies scheduled to release soon.

Reasoning Behind Technical Decisions

Libraries and Tools

React JS with Vite: Chosen for its fast setup and efficient build process.

React Router DOM: Used for routing to enable navigation between the homepage and movie details page.

TanStack Query: Selected for its robust support for asynchronous state management and caching.

Why These Libraries?

React: Familiarity with its ecosystem and ability to create reusable components.

React Router DOM: Essential for implementing a multi-page navigation system.

TanStack Query: Offers a simple yet powerful way to handle data fetching, caching, and error management.

Design Patterns

While no specific design patterns were implemented, the project uses component-based architecture for reusability and maintainability.

Trade-Offs Made

Limitations

Error Messages: Used simple headers for error handling instead of designing custom error screens.

Skipped Features

Aesthetic error message designs were omitted due to time constraints and a lack of inspiration during development.

Example Usage

Here’s a snippet demonstrating the main functionality of fetching and displaying movie data using TanStack Query:

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import MovieCard from "../../components/movieCard/MovieCard";
import PaginationComp from "../../components/pagination/PaginationComp";
import { getMovies, getSearchedMovies } from "../../utils/http";
import Loading from "../../components/loading/Loading";
import { useMoviesCategories } from "../../contexts/NavigationBarContext";

export default function HomePage() {
  const { moviesCategory, searchBarInput } = useMoviesCategories();
  const [pageNo, setPageNo] = useState(1);

  const moviesQuery = useQuery({
    queryKey: ["movies", pageNo, moviesCategory],
    queryFn: () => getMovies(pageNo, moviesCategory),
    enabled: !searchBarInput,
  });

  const searchQuery = useQuery({
    queryKey: ["searchedMovies", searchBarInput, pageNo],
    queryFn: () => getSearchedMovies(searchBarInput, pageNo),
    enabled: !!searchBarInput,
  });

  if (moviesQuery.isPending || searchQuery.isPending) {
    return <Loading />;
  }

  if (moviesQuery.isError || searchQuery.isError) {
    return <h1>Something went wrong!</h1>;
  }

  const data = searchBarInput ? searchQuery.data : moviesQuery.data;

  return (
    <div className="home-container">
      <ul className="movies-items">
        {data?.movies?.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
      {data.pages.length > 0 && (
        <PaginationComp pageNo={pageNo} setPageNo={setPageNo} pages={data.pages} />
      )}
    </div>
  );
}

Possible Future Improvements

Animation Enhancements: Integrate animation libraries like Framer Motion to create smoother and more dynamic interactions.

UI Improvements: Utilize UI libraries for improved icons, logos, and overall design consistency.

Error Handling: Design custom error screens with more engaging visuals and user-friendly messages.

Search Functionality: Enhance the search experience by adding suggestions or auto-complete functionality.
