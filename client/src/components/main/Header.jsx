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
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

const pages = [
  { name: "Home", link: "/" },
  { name: "Jobs", link: "/" },
];

const adminPages = [
  { name: "Openings", link: "/openings" },
  { name: "Applications", link: "/applications" },
];
function Header() {
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
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
          </Typography>

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
                <>
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
                </>
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
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

          <div className="flex flex-row items-center justify-center gap-3">
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                border: "2px solid white",
                padding: "6px",
                borderRadius: "50%",
              }}
              className="hover:border-red-500 hover:text-red-500 transition-colors duration-300 cursor-pointer"
            >
              <LinkedInIcon />
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                border: "2px solid white",
                padding: "6px",
                borderRadius: "50%",
              }}
              className="hover:border-red-500 hover:text-red-500 transition-colors duration-300 cursor-pointer"
            >
              <InstagramIcon />
            </Box>

            {isLoggedIn ? (
              <Box sx={{ flexGrow: 0 }}>
                <Avatar
                  alt="Vishnu Bansal"
                  sx={{
                    cursor: "pointer",
                    bgcolor: "orange",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  VB
                </Avatar>
              </Box>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={() => navigate("/sign-in")}
                  className="px-7 text-lg font-semibold capitalize py-3 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-gray-600 hover:bg-gray-300 hover:text-black rounded-[12px]"
                >
                  sign in
                </button>
                <button
                  onClick={() => navigate("/sign-up")}
                  className="px-7 text-lg font-semibold capitalize py-3 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-gray-600 hover:bg-gray-300 hover:text-black rounded-[12px]"
                >
                  sign up
                </button>
              </div>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
