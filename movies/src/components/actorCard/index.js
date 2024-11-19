import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function ActorCard({ actor }) {
  return (
    <Card>
      <CardHeader
        avatar={
          actor.popularity > 5 ? (
            <Avatar sx={{ backgroundColor: "green" }}>
              <StarRateIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}
          </Typography>
        }
      />
      {actor.profile_path && (
        <CardMedia
          component="img"
          sx={{ height: 500, borderRadius: "10px" }}
          image={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
          alt={actor.name}
        />
      )}
      <CardContent>
        <Grid container>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" component="p">
              Known for: {actor.known_for_department}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" component="p">
              Popularity: {actor.popularity.toFixed(1)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      <Button
          component={Link}
          to={`/actors/${actor.id}`}
          variant="contained"
          color="primary"
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
