import React, { useEffect, useState } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
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

const AuthPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [authType, setAuthType] = useState("Login");
  const q = searchParams.get("q") === "signup" ? "Signup" : "Login";
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

  const onSubmit = (formData: FieldValues) => {
    console.log(formData);
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
