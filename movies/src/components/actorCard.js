import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ActorCard = ({ actor }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} // Actor image
        alt={actor.name}
      />
      <CardContent>
        <Typography variant="h5">{actor.name}</Typography>
        <Typography variant="body2">{actor.known_for.map((movie) => movie.title).join(", ")}</Typography>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
