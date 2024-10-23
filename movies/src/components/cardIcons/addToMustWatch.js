import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToMustWatchIcon = ({ movie }) => {
    const context = useContext(MoviesContext);
    const handleAddToMustWatch = (e) => {
        e.preventDefault();
        context.addToMustWatch(movie);
    };
    return (
        <IconButton aria-label="add to playlist" onClick={handleAddToMustWatch}>
        <PlaylistIcon color="primary" fontSize="large" />
        </IconButton>
    );
};
export default AddToMustWatchIcon;