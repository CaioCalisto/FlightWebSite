import { Box, MenuItem, SxProps, TextField, Theme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

type DropDownTextType = {
  label: string;
  availableOption: string[],
  onDataChanged: (value: string) => void,
  style: SxProps<Theme>
};

function DropDownText({ label, availableOption, onDataChanged, style }: DropDownTextType) {
  return (
    <Box
      component="form"
      sx={style}
      // sx={{
      //   "& .MuiTextField-root": {width: '45ch' },
      // }}
      noValidate
      autoComplete="off"
    >
      <TextField select label={label} onChange={(e) => onDataChanged(e.target.value)}>
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
