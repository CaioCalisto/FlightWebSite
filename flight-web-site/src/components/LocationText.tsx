import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

type LocationTextType = {
  label: string;
};

const availableLocations = ["Porto", "Lisbon", "Dublin", "Cork"];

function LocationText({ label }: LocationTextType) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-select-currency" select label={label}>
        {availableLocations.map((option) => (
          <MenuItem>{option}</MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default LocationText;
