import { Button, Grid, TextField, Typography, Container, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/")
    // Add your form submission logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className="p-6">
        <Typography variant="h5" align="center" className="mb-4">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="email"
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="password"
                id="password"
                name="password"
                label="Password"
                fullWidth
                autoComplete="password"
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ padding: "0.8rem" }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        <div className="flex flex-col items-center mt-4">
          <Typography variant="body2">
            Don't have an account?
          </Typography>
          <Button
            onClick={() => navigate("/register")}
            variant="text"
            color="primary"
            size="small"
            className="mt-2"
          >
            Register
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default Loginform;
