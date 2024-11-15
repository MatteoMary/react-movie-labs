import React from "react";
import { Button, Typography, CardContent } from "@mui/material";

const ActorCard = ({ actor }) => {
  return (
    <>
      <Typography variant="h6">{actor.name}</Typography>
      {actor.profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
          alt={actor.name}
          style={{ width: "100%", borderRadius: "10px" }}
        />
      )}
      <CardContent>
        <Typography variant="body2">
          Known for:{" "}
          {actor.known_for.map((item) => item.title || item.name).join(", ")}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary">
        View Details
      </Button>
    </>
  );
};

export default ActorCard;
