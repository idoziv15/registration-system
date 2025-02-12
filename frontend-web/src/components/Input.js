import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, type = "text", name, ...props }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      type={type}
      name={name}
      sx={{ marginBottom: "15px", borderRadius: "10px" }}
      {...props}
    />
  );
};

export default Input;
