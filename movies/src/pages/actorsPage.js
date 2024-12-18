import React from "react";
import { useQuery } from "react-query";
import { getActors } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import Grid from "@mui/material/Grid2";
import ActorCard from "../components/actorCard";

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
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {actors.map((actor) => (
        <Grid key={actor.id} xs={12} sm={6} md={4} lg={3}>
          <ActorCard actor={actor} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ActorsPage;
