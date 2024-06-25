import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, Fade } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../shared/images/biofdnc_logo.png'; // 로고 이미지 경로
import './NavBar.css'; // CSS 파일 경로
import navItems from './navItems'; // 네비게이션 아이템 리스트 경로
import useNavStore from './useNavStore'; // zustand 상태 관리

function NavBar({ isLoggedIn, onLogout }) {
  const { anchorEl, menuItems, setAnchorEl, setMenuItems, handleClose } = useNavStore();

  const handleMouseOver = (event, items) => {
    setAnchorEl(event.currentTarget);
    setMenuItems(items);
  };

  return (
    <>
      <Box className="nav-bar-top-line" />
      <AppBar position="static" className="nav-bar">
        <Toolbar className="nav-bar-toolbar">
          <Box className="nav-bar-logo-container">
            <img src={logo} alt="Logo" className="nav-bar-logo" />
            <Typography variant="h6" component="div" className="nav-bar-title">
              BIO-FD&C
            </Typography>
          </Box>
          <Box className="nav-bar-items-container">
            {navItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to="#"
                className="nav-bar-item"
                sx={{ margin: '0 20px' }} // 아이템 간의 거리를 조정
                onMouseOver={(event) => handleMouseOver(event, item.subItems)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          {isLoggedIn ? (
            <Button
              color="inherit"
              onClick={onLogout}
              className="nav-bar-item"
              sx={{ margin: '0 20px' }} // 아이템 간의 거리를 조정
            >
              로그아웃
            </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/login"
              className="nav-bar-item"
              sx={{ margin: '0 20px' }} // 아이템 간의 거리를 조정
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
        TransitionComponent={Fade} // 트랜지션을 Fade로 변경
        transitionDuration={{ enter: 1, exit: 1 }} // 애니메이션 지속 시간 조정
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menuItems.map((subItem, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{ fontSize: '0.8rem' }} // 네비게이션 바 아이템과 동일한 폰트 크기
          >
            {subItem}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default NavBar;