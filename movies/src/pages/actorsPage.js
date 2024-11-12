import React from "react";
import { useQuery } from "react-query";
import { getPopularActors } from "../api/tmdb-api"; 
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner"; 
import ActorCard from "../components/actorCard";

const ActorsPage = () => {
  const { data, error, isLoading, isError } = useQuery("popularActors", getPopularActors);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data.results;

  return (
    <PageTemplate title="Popular Actors" movies={actors} action={(actor) => {
      return <ActorCard actor={actor} />;
    }} />
  );
};

export default ActorsPage;
