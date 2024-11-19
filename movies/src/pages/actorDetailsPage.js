import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid2, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ActorDetailsPage = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    const fetchActorDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      );
      const data = await response.json();
      setActor(data);
    };

    fetchActorDetails();
  }, [id]);

  if (!actor) return <Typography variant="h5">Loading...</Typography>;

  return (
    <Grid2 container spacing={4} sx={{ padding: 4 }}>
      {/* Actor Image */}
      <Grid2 item xs={12} md={4}>
        <Card>
          <CardMedia
            component="img"
            alt={actor.name}
            image={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
          />
        </Card>
      </Grid2>

      {/* Actor Details */}
      <Grid2 item xs={12} md={8}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {actor.name}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <strong>Birthday:</strong> {actor.birthday || "N/A"}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <strong>Place of Birth:</strong> {actor.place_of_birth || "N/A"}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <strong>Popularity:</strong> {actor.popularity?.toFixed(1)}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <strong>Biography:</strong> {actor.biography || "Biography not available."}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>

      {/* Known For Section */}
      <Grid2 item xs={12}>
        <Typography variant="h5" gutterBottom sx={{ padding: 2 }}>
          Known For
        </Typography>
        <Grid2 container spacing={2}>
          {actor.known_for_department === "Acting" && actor.movie_credits?.cast?.length > 0 ? (
            actor.movie_credits.cast.slice(0, 6).map((movie) => (
              <Grid2 item xs={12} sm={6} md={4} key={movie.id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{movie.title}</Typography>
                    <Typography variant="body2">
                      {movie.release_date ? `Released: ${movie.release_date}` : "No Release Date"}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/movies/${movie.id}`}
                      variant="outlined"
                      color="primary"
                      sx={{ marginTop: 1 }}
                    >
                      More Info
                    </Button>
                  </CardContent>
                </Card>
              </Grid2>
            ))
          ) : (
            <Typography variant="body1" sx={{ padding: 2 }}>
              No movies available.
            </Typography>
          )}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ActorDetailsPage;
