import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useAuth, useNotification } from "../hooks";
import { isValidEmail } from "../utils/validator";
import { createUser } from "../api/auth";

const defaultTheme = createTheme();

const validateUserInfo = ({ name, email, password, confirmPassword }) => {
  const isValidName = /^[a-z A-Z]+$/;

  if (!name.trim()) return { ok: false, error: "Name is missing!" };
  if (!isValidName.test(name)) return { ok: false, error: "Invalid name!" };

  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (isValidEmail(email)) return { ok: false, error: "Invalid email!" };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long!" };

  if (!confirmPassword.trim())
    return { ok: false, error: "Confirm Password is missing!" };
  if (confirmPassword.length < 8)
    return { ok: false, error: "Confirm Password must be 8 characters long!" };

  if (password.trim().toString() !== confirmPassword.trim().toString()) {
    return { ok: false, error: "confirm password and password don't match" };
  }
  return { ok: true };
};

export default function SignUp() {
  const [userInfo, setUserInfo] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;

  const { updateNotification } = useNotification();

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);

    if (!ok) return updateNotification("error", error);

    const response = await createUser(userInfo);
    if (response.error) return console.log(response.error);

    navigate("/verification", {
      state: { user: response.user },
      replace: true,
    });
  };

  React.useEffect(() => {
    // we want to move our user to somewhere else
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  const { name, email, password, confirmPassword } = userInfo;

  return (
    <div className="bg-[#f5f6fa] w-full h-full min-h-[100vh] flex flex-col justify-center items-center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={1}
        marginBottom={4}
      >
        <Typography variant="h5" color={"#5c6575"}>
          Welcome to the
        </Typography>
        <Typography variant="h5" fontWeight="bold" color={"#5c6575"}>
          Candidate Portal
        </Typography>
      </Box>
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="xs"
          className="bg-white rounded-[20px] shadow-lg pt-8"
        >
          <CssBaseline />
          <LockOutlinedIcon />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign Up
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
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={handleChange}
                value={name}
              />
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                onChange={handleChange}
                value={confirmPassword}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
          <Box
            marginTop={3}
            textAlign="center"
            borderTop="1px dotted"
            borderColor="grey.500"
            p={3}
          >
            <Typography variant="body1">
              Already have an account?{" "}
              <span
                style={{ color: "blue" }}
                onClick={() => navigate("/sign-in")}
                className="cursor-pointer hover:underline"
              >
                Login
              </span>
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        marginTop={3}
      >
        <Typography variant="h5" color={"#5c6575"}>
          Powered By VB
        </Typography>
      </Box>
    </div>
  );
}
