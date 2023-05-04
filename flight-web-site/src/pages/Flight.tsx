import {
  Button,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

function Flight() {
  return (
    <>
      <RadioGroup row style={{ padding: "10px 0 10px 0" }}>
        <FormControlLabel
          value="Return trip"
          control={<Radio />}
          label="Return Trip"
        />
        <FormControlLabel
          value="Return trip"
          control={<Radio />}
          label="Return Trip"
        />
      </RadioGroup>

      <Stack direction="row" justifyContent="left">
        <TextField label="From" />
        <TextField label="To" />
        <Button variant="outlined">Search</Button>
      </Stack>
    </>
  );
}

export default Flight;
