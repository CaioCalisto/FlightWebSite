import { Box, MenuItem, TextField, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

type DropDownTextType = {
  label: string;
  availableOption: string[],
  onLocationChanged: (value: string) => void
};

function DropDownText({ label, availableOption, onLocationChanged }: DropDownTextType) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField select label={label} onChange={(e) => onLocationChanged(e.target.value)}>
        {availableOption.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default DropDownText;
