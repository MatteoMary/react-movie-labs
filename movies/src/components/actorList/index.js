import React from "react";
import ActorCard from "../actorCard";
import Grid from "@mui/material/Grid2";

const ActorList = ({ actors }) => {
  return actors.map((actor) => (
    <Grid key={actor.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ActorCard actor={actor} />
    </Grid>
  ));
};

export default ActorList;
