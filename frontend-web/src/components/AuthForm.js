import React from "react";
import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import SocialAuth from "./SocialAuth";

const AuthForm = ({ type }) => {
  return (
    <Grid 
      container 
      component={Paper} 
      elevation={5} 
      sx={{ height: "80vh", width: "900px", overflow: "hidden", display: "flex" }}
    >
      {/* Left Side - Welcome Message */}
      <Grid 
        item 
        xs={5} 
        sx={{
          backgroundColor: "#4b61c0",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Welcome aboard my friend
        </Typography>
        <Typography variant="body2">Just a couple of clicks and we start</Typography>
      </Grid>

      {/* Right Side - Form */}
      <Grid 
        item 
        xs={7} 
        sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 5 }}
      >
        <Typography variant="h5" align="center" marginBottom={2}>
          {type === "login" ? "Log in" : "Register"}
        </Typography>

        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        {type === "register" && <TextField label="Username" fullWidth margin="normal" />}

        <Button variant="contained" sx={{ mt: 2, borderRadius: "25px", height: "45px" }} fullWidth>
          {type === "login" ? "Log in" : "Register"}
        </Button>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Forgot password?
        </Typography>

        <SocialAuth />
      </Grid>
    </Grid>
  );
};

export default AuthForm;
