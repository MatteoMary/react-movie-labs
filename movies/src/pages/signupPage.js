import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth(); // Use AuthContext for signup
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signUp(email, password); // Call Firebase signup function
      navigate("/"); // Redirect to home page after successful signup
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSignup}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 2,
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        sx={{ marginTop: 2 }}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </Button>
      <Typography
        variant="body2"
        sx={{ marginTop: 2, cursor: "pointer" }}
        onClick={() => navigate("/login")}
      >
        Already have an account? Log in.
      </Typography>
    </Box>
  );
};

export default SignupPage;
