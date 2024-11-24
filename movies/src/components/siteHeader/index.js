import React, { useState, useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { auth } from '../../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { ThemeContext } from '../../contexts/themeContext';
import { AuthContext } from '../../contexts/authContext'; 

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  // Use auth context
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const menuOptions = [
    { label: 'Home', path: '/' },
    { label: 'Favorites', path: '/movies/favorites' },
    { label: 'Upcoming', path: '/movies/upcoming' },
    { label: 'Actors', path: '/movies/actors' },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null); // Ensure currentUser is set to null on logout
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.error('Logout error: ', error);
      });
  };

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>

          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            color="default"
            inputProps={{ "aria-label": "theme toggle" }}
          />
          {!currentUser && (
  <Button color="inherit" onClick={() => navigate("/signup")}>
    Sign Up
  </Button>
)}

          {/* Mobile Menu */}
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
                {currentUser ? (
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                ) : (
                  <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
                )}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
              {currentUser ? (
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button color="inherit" onClick={() => navigate('/login')}>
                  Login
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
