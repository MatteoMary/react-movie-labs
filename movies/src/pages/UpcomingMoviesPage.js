import React, { useContext } from "react";
import { useQuery } from "react-query";
import { MoviesContext } from "../contexts/moviesContext";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

const UpcomingMoviesPage = () => {
  const { upcomingMovies } = useContext(MoviesContext);

  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies, {
    initialData: upcomingMovies,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  const addToMustWatch = (movieId) => true

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;
