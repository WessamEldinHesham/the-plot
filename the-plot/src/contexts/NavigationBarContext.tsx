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
  const [pageNo, setPageNo] = useState<number>(1);

  return (
    <MoviesCategories.Provider
      value={{
        moviesCategory,
        setMoviesCategory,
        searchBarInput,
        setSearchBarInput,
        pageNo,
        setPageNo
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
