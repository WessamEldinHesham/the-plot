import { convertDate } from "./helperFunctions";

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

export async function getMovies(pageNo: number, moviesCategory: string) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${moviesCategory}?language=en-US&page=${pageNo}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWVjZDMzYzViYjlmN2E1MDQ2NzAwYWVkMzkzZWEzZiIsIm5iZiI6MTczNDI3MDYyOC4zMTIsInN1YiI6IjY3NWVkZWE0OTZjZmRkYmYxOWNjYjU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xDc1bTdYMpdr4fW8ZZzsR11LHu1ZpfSHvKmczQl6lbs",
      },
    }
  );

  if (!request.ok) {
    throw new Error("Could not fetch Movies.");
  }

  const response = await request.json();
  const numberOfPages: number[] = Array.from(
    { length: response.total_pages },
    (_, i) => i + 1
  );
  const moviesList = response.results.map((movie: IMovie) => {
    const formattedReleaseDate: string = convertDate(movie.release_date)
    return { ...movie, release_date: formattedReleaseDate };
  });
  return { movies: moviesList, pages: numberOfPages };
}

export async function getMovie(id: string) {
  const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWVjZDMzYzViYjlmN2E1MDQ2NzAwYWVkMzkzZWEzZiIsIm5iZiI6MTczNDI3MDYyOC4zMTIsInN1YiI6IjY3NWVkZWE0OTZjZmRkYmYxOWNjYjU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xDc1bTdYMpdr4fW8ZZzsR11LHu1ZpfSHvKmczQl6lbs'
  }
  });

  if(!request.ok) {
    throw new Error("Could not fetch the selected Movie.")
  }
  const response = await request.json()
  return response
}

export async function getSearchedMovies(name: string, pageNo: number) {
  const request = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=${pageNo}`, {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWVjZDMzYzViYjlmN2E1MDQ2NzAwYWVkMzkzZWEzZiIsIm5iZiI6MTczNDI3MDYyOC4zMTIsInN1YiI6IjY3NWVkZWE0OTZjZmRkYmYxOWNjYjU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xDc1bTdYMpdr4fW8ZZzsR11LHu1ZpfSHvKmczQl6lbs'
  }
  });

  const response = await request.json();

  const numberOfPages: number[] = Array.from(
    { length: response.total_pages },
    (_, i) => i + 1
  );

  const moviesList = response.results.map((movie: IMovie) => {
    if(movie.release_date) {
      const formattedReleaseDate: string = convertDate(movie.release_date)
      return { ...movie, release_date: formattedReleaseDate };
    }
    return {...movie, release_date: "Not Documented"}
  });

  return { movies: moviesList, pages: numberOfPages };
}
