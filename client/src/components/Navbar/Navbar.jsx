import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HiveIcon from '@mui/icons-material/Hive';
import { hiveIconSx, logoSx, menuSx, toolbarSx, buttonSx, boxMobileSx, boxDesktopSx } from "./NavbarStyles";


function NavBar() {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { label: 'Home', path: '/' },
    { label: 'Catalog', path: '/catalog' },
    { label: 'Cart', path: '/cart' },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //  Generates the style object for the Button component based on the current path and index of the current page in the pages array.
  const getActiveBtn = (path, index) => ({
    ...buttonSx,
    backgroundColor: path === window.location.pathname ? 'rgba(255, 255, 255, 0.2)' : 'transparent', // Highlight button if it matches the current path
    marginRight: index < pages.length - 1 ? 2 : 0,
  });

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={toolbarSx}>
          <p>Logo</p>
          <Box sx={boxMobileSx}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={menuSx}>
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={() => navigate(page.path)}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>

          <HiveIcon sx={hiveIconSx} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={logoSx}>
            LOGO
          </Typography>
          <Box sx={boxDesktopSx}>
            {pages.map((page, index) => (
              <Button
                key={page.label}
                variant="contained"
                size="medium"
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.path);
                }}
                sx={getActiveBtn(page.path, index)}>
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
