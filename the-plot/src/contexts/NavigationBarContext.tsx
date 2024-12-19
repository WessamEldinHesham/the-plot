import React, { createContext, useContext, useState } from "react";

interface MoviesCategoriesContextType {
  moviesCategory: string;
  setMoviesCategory: React.Dispatch<React.SetStateAction<string>>;
}

const MoviesCategories = createContext<MoviesCategoriesContextType | any>(
  undefined
);

export default function NavigationBarContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [moviesCategory, setMoviesCategory] = useState<string>("now_playing");
  const [searchBarInput, setSearchBarInput] = useState<string>("");

  return (
    <MoviesCategories.Provider
      value={{
        moviesCategory,
        setMoviesCategory,
        searchBarInput,
        setSearchBarInput,
      }}
    >
      {children}
    </MoviesCategories.Provider>
  );
}

// Custom hook to use the context
export const useMoviesCategories = () => {
  const context = useContext(MoviesCategories);

  return context;
};
