import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import firebase auth
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'; // Import the useAuth hook
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';

const LoginPage = () => {
  const { logIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      await logIn(email, password); // Use logIn method
      console.log("Logged in successfully");
      navigate("/");
    } catch (err) {
      setError(err.message); // Display error
      console.error("Login failed:", err.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="email"
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="current-password"
            />
            {error && <Typography color="error" variant="body2">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
