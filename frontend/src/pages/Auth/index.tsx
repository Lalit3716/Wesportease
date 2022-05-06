import React, { useEffect, useState } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Stack,
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Link as MUILink,
  Button,
} from "@mui/material";
import Navbar from "../../components/Navbar";
import useHttp from "../../hooks/useHttp";
import { API } from "../../config";
import useAuth from "../../hooks/useAuth";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [searchParams] = useSearchParams();
  const [authType, setAuthType] = useState("Login");
  const q = searchParams.get("q") === "signup" ? "Signup" : "Login";
  const { isLoading, sendRequest, error } = useHttp();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setAuthType(q);
  }, [q]);

  const switchAuthType = () => {
    setAuthType(authType === "Login" ? "Signup" : "Login");
  };

  const apiRequest = async (formData: FieldValues) => {
    if (authType === "Login") {
      const { data } = await axios.post(`${API}/auth/login`, formData);

      return data;
    } else {
      const { data } = await axios.post(`${API}/auth/signup`, formData);
      return data;
    }
  };

  const onSubmit = (formData: FieldValues) => {
    sendRequest(apiRequest, formData, (data: any) => {
      login(data.user, data.token, data.expiresIn);
      navigate("/");
    });
  };

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Container
        sx={{
          mt: 2,
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{ minWidth: "30%" }}
          component="form"
          elevation={5}
          onSubmit={handleSubmit(onSubmit)}
        >
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h4">{authType}</Typography>
              {authType === "Signup" && (
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: "Username is required" }}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Username"
                      size="small"
                      fullWidth
                      helperText={errors.username?.message}
                      error={Boolean(errors.username)}
                    />
                  )}
                />
              )}
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "This is not a valid email",
                  },
                }}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    size="small"
                    fullWidth
                    helperText={errors.email?.message}
                    error={Boolean(errors.email)}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    size="small"
                    fullWidth
                    helperText={errors.password?.message}
                    error={Boolean(errors.password)}
                  />
                )}
              />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <MUILink href="#" underline="hover">
                  <Typography variant="body1">Forgot Password ?</Typography>
                </MUILink>
                <Button variant="contained" color="warning" type="submit">
                  {authType}
                </Button>
              </Stack>
              {isLoading && (
                <Typography variant="body2" color="Highlight">
                  {authType === "Login"
                    ? "Logging you in..."
                    : "Registering you in..."}
                </Typography>
              )}
              {error && (
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              )}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                bgcolor="#ffe9e9"
                p={2}
              >
                {authType === "Login" ? (
                  <Typography
                    variant="body1"
                    onClick={switchAuthType}
                    sx={{ cursor: "pointer" }}
                  >
                    Don't have an account?{" "}
                    <MUILink component="span" underline="hover">
                      Sign up
                    </MUILink>
                  </Typography>
                ) : (
                  <Typography
                    variant="body1"
                    onClick={switchAuthType}
                    sx={{ cursor: "pointer" }}
                  >
                    Already have an account?{" "}
                    <MUILink component="span" underline="hover">
                      Login
                    </MUILink>
                  </Typography>
                )}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AuthPage;
