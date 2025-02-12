import React from "react";
import { Paper } from "@mui/material";

const Card = ({ children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "30px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        borderRadius: "0px",
        boxShadow: "none",
      }}
    >
      {children}
    </Paper>
  );
};

export default Card;
