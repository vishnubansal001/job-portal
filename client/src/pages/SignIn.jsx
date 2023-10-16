import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useAuth, useNotification } from "../hooks";
import { isValidEmail } from "../utils/validator";

const defaultTheme = createTheme();

const validateUserInfo = ({ email, password }) => {
  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (!isValidEmail(email)) return { ok: false, error: "Chitkara Email Only!" };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long!" };

  return { ok: true };
};

export default function SignIn() {
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { updateNotification } = useNotification();
  const { handleLogin, authInfo } = useAuth();
  const { isPending, isLoggedIn } = authInfo;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);

    if (!ok) return updateNotification("error", error);
    handleLogin(userInfo.email, userInfo.password);
  };

  React.useEffect(() => {
    // we want to move our user to somewhere else
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  const { email, password } = userInfo;

  return (
    <div className="bg-[#f5f6fa] w-full h-full min-h-[100vh] flex flex-col justify-center items-center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={1}
        marginBottom={4}
      >
        <Typography
          variant="h5"
          color={"#5c6575"}
          className="px-3 text-center md:pt-0 pt-4"
        >
          Welcome to the Candidate Portal
        </Typography>
      </Box>
      <div className="px-2">
        <ThemeProvider theme={defaultTheme}>
          <Container
            component="main"
            maxWidth="xs"
            className="bg-white rounded-[20px] shadow-lg pt-2"
          >
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                className="flex justify-between w-full items-center"
              >
                Sign In
                <LockOutlinedIcon />
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  value={email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={password}
                />
                {/* <Grid container>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Link
                      variant="body2"
                      onClick={() => navigate("/forget-password")}
                      sx={{ textDecoration: "none" }}
                      className="cursor-pointer hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid> */}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isPending}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
            <Box
              marginTop={5}
              textAlign="center"
              borderTop="1px dotted"
              borderColor="grey.500"
              p={3}
            >
              <Typography variant="body1">
                Do not have an account?{" "}
                <span
                  style={{ color: "blue" }}
                  onClick={() => navigate("/sign-up")}
                  className="cursor-pointer hover:underline"
                >
                  Create an account
                </span>
              </Typography>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        marginTop={3}
      >
        <Typography
          variant="h5"
          color={"#5c6575"}
          className="px-3 text-center md:pb-0 pb-4"
        >
          Powered By CN_CUIET
        </Typography>
      </Box>
    </div>
  );
}
