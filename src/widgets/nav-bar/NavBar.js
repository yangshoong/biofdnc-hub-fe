import React from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, Fade } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../shared/images/biofdnc_logo.png';
import './NavBar.css';
import navItems from './navItems';
import useNavStore from './useNavStore';

function NavBar({ isLoggedIn, onLogout }) {
  const { anchorEl, menuItems, setAnchorEl, setMenuItems, handleClose } = useNavStore();
  const navigate = useNavigate();

  const handleMouseOver = (event, items) => {
    setAnchorEl(event.currentTarget);
    setMenuItems(items);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <>
      <Box className="nav-bar-top-line" />
      <AppBar position="static" className="nav-bar">
        <Toolbar className="nav-bar-toolbar">
          <Box className="nav-bar-logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" className="nav-bar-logo" />
            </Link>
          </Box>
          <Box className="nav-bar-items-container">
            {navItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to="#"
                className="nav-bar-item"
                sx={{ margin: '0 20px' }}
                onMouseOver={(event) => handleMouseOver(event, item.subItems)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          {isLoggedIn ? (
            <Button
              color="inherit"
              onClick={handleLogout}
              className="nav-bar-item"
              sx={{ margin: '0 20px' }}
            >
              로그아웃
            </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/login"
              className="nav-bar-item"
              sx={{ margin: '0 20px' }}
            >
              로그인
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
        transitionDuration={{ enter: 1, exit: 1 }}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menuItems.map((subItem, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={subItem.link}
            onClick={handleClose}
            sx={{ fontSize: '0.8rem' }}
          >
            {subItem.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default NavBar;