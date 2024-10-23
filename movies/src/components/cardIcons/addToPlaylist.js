import React from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {
  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    //does not need to trigger any action.
  };
  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
      <PlaylistIcon color="primary" fontSize="large" />
    </IconButton>
  );
};
export default AddToPlaylistIcon;