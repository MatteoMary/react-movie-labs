import React from "react";
import { useQuery } from "react-query";
import { getActors } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import ActorCard from "../components/cardIcons/actorCard";

const ActorsPage = () => {
  const { data, error, isLoading, isError } = useQuery("actors", getActors);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data.results;

  return (
    <PageTemplate
      title="Popular Actors"
      movies={actors} // Reuse the "movies" prop to pass actor data
      action={(actor) => <ActorCard actor={actor} />}
    />
  );
};

export default ActorsPage;
