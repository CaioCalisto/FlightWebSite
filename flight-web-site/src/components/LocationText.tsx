import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

type LocationTextType = {
  label: string;
  onLocationChanged: (value: string) => void
};

const availableLocations = ["Porto", "Lisbon", "Dublin", "Cork"];

function LocationText({ label, onLocationChanged }: LocationTextType) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField select label={label} onChange={(e) => onLocationChanged(e.target.value)}>
        {availableLocations.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default LocationText;
