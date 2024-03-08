import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import avatar from "../assets/icons/avatar.png";
const pages = ["menu", "blog"];
function Navbar() {
  const { logOut, currentUser } = useAuthContext();

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to={"/"} style={{display:"flex", textDecoration:"none"}}>
            <RestaurantIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "#88BF6F",
              }}
            />                
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#FBCE3A",
                textDecoration: "none",
              }}
            >
              Recipe
            </Typography>
            </NavLink>  
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} >
                    <NavLink
                      to={`/${page}`}
                      style={{ textAlign: "center", textDecoration: "none" }}
                      
                    >
                      {page.toUpperCase()}
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <NavLink to={"/"} style={{display:"flex", textDecoration:"none"}}>
            <RestaurantIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "#88BF6F",
              }}
            />          
           <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#FBCE3A",
                textDecoration: "none",
              }}
            >
              Recipe
            </Typography>
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <NavLink
                data-test={page + "test"}
                  to={`/${page}`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  style={{
                    my: 2,
                    color: "black",
                    display: "block",
                    textDecoration: "none",
                    marginRight: "1rem",
                    
                  }}
                >
                  {page.toUpperCase()}
                </NavLink>
              ))}
            </Box>
            {currentUser && (
                <Typography marginRight={2} >{currentUser?.displayName} </Typography>
              )}
            <Box sx={{ flexGrow: 0 }}>
             <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={currentUser?.photoURL || avatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {currentUser ? (
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={logOut}>LogOut</Typography>
                  </MenuItem>
                ) : (
                    <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={()=>navigate("/login")}>Log in</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={()=>navigate("/register")}>Register</Typography>                    
                  </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
           
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
