import React from "react";
import { Button, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialAuth = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        sx={{
          borderRadius: "25px",
          textTransform: "none",
          padding: "10px 20px",
          fontSize: "14px",
        }}
      >
        Google
      </Button>

      <Button
        variant="outlined"
        startIcon={<FacebookIcon />}
        sx={{
          borderRadius: "25px",
          textTransform: "none",
          padding: "10px 20px",
          fontSize: "14px",
        }}
      >
        Facebook
      </Button>
    </Stack>
  );
};

export default SocialAuth;
