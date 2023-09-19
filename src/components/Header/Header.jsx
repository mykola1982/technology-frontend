import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  SvgIcon,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { ReactComponent as PressIcon } from "icons/press-svgrepo-com.svg";

import { logOut } from "../../redux/auth/authOperation";
import { useAuth } from "hooks";
import { AvatarCustom } from "components/AvatarCustom";

const pages = [
  { name: "Продукція", to: "/products" },
  { name: "Замовлення", to: "/orders" },
  { name: "Матеріали", to: "/materials" },
  { name: "Користувачі", to: "/users" },
];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const { user } = useAuth();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar>
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <SvgIcon
              size="medium"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                fontSize: 36,
                color: "#fff",
              }}
            >
              <PressIcon fontSize="medium" />
            </SvgIcon>
            TECHNOLOGIST
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              arial-controls="menu-appar"
              arial-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ name, to }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={NavLink}
                    to={to}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            TECHNOLOGIST
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, to }) => (
              <Button
                key={name}
                onClick={handleCloseNavMenu}
                component={Link}
                to={to}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  mr: 1,
                }}
              >
                {name}
              </Button>
            ))}
          </Box>

          <AvatarCustom name={user.name} />

          <Typography
            variant="p"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontSize: "1rem",
              alignItems: "center",
            }}
          >
            Користувач: {user.name}
          </Typography>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
            onClick={handleLogOut}
          >
            <LogoutIcon />
          </IconButton>

          <Button
            endIcon={<LogoutIcon />}
            sx={{ display: { xs: "none", md: "flex" }, color: "white", mr: 2 }}
            onClick={handleLogOut}
          >
            Вийти
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
