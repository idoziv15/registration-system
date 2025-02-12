import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ children, type = "button", ...props }) => {
  return (
    <MuiButton
      fullWidth
      type={type}
      variant="contained"
      sx={{
        backgroundColor: "#4b61c0",
        color: "white",
        fontSize: "18px",
        borderRadius: "25px",
        padding: "12px",
        textTransform: "none",
        "&:hover": { backgroundColor: "#3a4e9f" },
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
