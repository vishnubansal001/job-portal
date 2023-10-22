import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import logo from "../../assets/favicon.png";
import HeroHome from "../../components/homePage/HeroHome";
import heroBg from "../../assets/heroBg.svg";

const pages = [{ name: "Home", link: "/" }];

const adminPages = [
  { name: "Openings", link: "/openings" },
  { name: "Applications", link: "/applications" },
];

function Header({
  title1,
  title2,
  text,
  btn,
  teamName,
  jobName,
  color,
  onclick,
}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate();

  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;
  const isAdmin = authInfo.profile?.role === "admin";
  const nameUser = authInfo.profile?.name;

  // const [anchorEl, setAnchorEl] = useState(false);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const { handleLogout } = useAuth();

  const handleLog = () => {
    // Add your logout logic here
    handleLogout();
    // console.log("skdhfbekj");
    // handleClose();
  };
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-cover bg-center w-full h-full p-0"
    >
      <AppBar position="static" sx={{ bgcolor: "rgba(0, 0, 0, 0.75)" }}>
        <Container maxWidth="xl" className="p-4">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => navigate("/")}
          >
            LOGO
          </Typography> */}
            <Box
              sx={{
                flexGrow: { xs: 1, md: 0 },
                display: { xs: "flex", md: "flex" },
              }}
            >
              <a href="https://codingninjas-cuiet.in/" target="_blank">
                <img
                  src={logo}
                  onClick={() => navigate("/")}
                  alt="logo"
                  className="flex w-20 mr-3 cursor-pointer"
                />
              </a>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate(`${page.link}`)}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
                {isAdmin && (
                  <div>
                    {adminPages.map((page, index) => (
                      <MenuItem key={index} onClick={handleCloseNavMenu}>
                        <Typography
                          textAlign="center"
                          onClick={() => navigate(`${page.link}`)}
                        >
                          {page.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </div>
                )}
                {!isLoggedIn ? (
                  <span>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => navigate(`/sign-in`)}
                        className="capitalize"
                      >
                        sign in
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        className="capitalize"
                        onClick={() => navigate(`/sign-in`)}
                      >
                        sign up
                      </Typography>
                    </MenuItem>
                  </span>
                ) : (
                  <MenuItem onClick={handleCloseNavMenu}>
                    <button
                      className="text-lg font-semibold capitalize py-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-600 rounded-[12px]"
                      onClick={handleLog}
                    >
                      Logout
                    </button>
                  </MenuItem>
                )}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => navigate("/")}
          >
            LOGO
          </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`${page.link}`);
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "1rem",
                  }}
                  className="text-base"
                >
                  {page.name}
                </Button>
              ))}
              {isAdmin && (
                <>
                  {adminPages.map((page, index) => (
                    <Button
                      key={index}
                      onClick={() => {
                        handleCloseNavMenu();
                        navigate(`${page.link}`);
                      }}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.name}
                    </Button>
                  ))}
                </>
              )}
            </Box>

            <div className="hidden md:flex flex-row items-center justify-center gap-3">
              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "flex" },
                  border: "2px solid white",
                  padding: "8px",
                  borderRadius: "50%",
                }}
                className="hover:border-orange-500 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              >
                <a
                  href="https://www.linkedin.com/company/codingninjas-cuiet/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </Box>
              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "flex" },
                  border: "2px solid white",
                  padding: "8px",
                  borderRadius: "50%",
                }}
                className="hover:border-orange-500 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              >
                <a
                  href="https://instagram.com/codingninjas_cuiet?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
              </Box>
            </div>
            <div className="px-4 hidden md:block">
              {isLoggedIn ? (
                <Box
                  sx={{
                    flexGrow: 0,
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <Avatar
                    alt={nameUser}
                    sx={{
                      cursor: "pointer",
                      bgcolor: `${color}`,
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    // onClick={handleClick}
                  >
                    {nameUser?.charAt(0)?.toUpperCase()}
                  </Avatar>
                  <div>
                    <button
                      className="text-lg font-semibold capitalize py-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-600 rounded-[12px]"
                      onClick={handleLog}
                    >
                      Logout
                    </button>
                  </div>
                </Box>
              ) : (
                <div className="hidden sm:flex justify-center items-center gap-2">
                  <button
                    onClick={() => navigate("/sign-in")}
                    className="text-base font-semibold capitalize py-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-600 rounded-[12px]"
                  >
                    Sign in
                  </button>
                  <p className="text-base cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-600 rounded-[12px]">
                    /
                  </p>
                  <button
                    onClick={() => navigate("/sign-up")}
                    className="text-base font-semibold capitalize py-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-600 rounded-[12px]"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {title1 && (
        <HeroHome
          title1={title1}
          title2={title2}
          text={text}
          btn={btn}
          teamName={teamName}
          jobName={jobName}
          onclick={onclick}
        />
      )}
    </div>
  );
}
export default Header;
