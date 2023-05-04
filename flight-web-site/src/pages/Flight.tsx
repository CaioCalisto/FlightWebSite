import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import LocationText from "../components/LocationText";

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

      <Stack direction="row" >
        <LocationText label="From" />
        <LocationText label="To" />
        <Button variant="outlined">Search</Button>
      </Stack>
      {/* <Stack direction="row" justifyContent="left">
        <LocationText label="From" />
        <LocationText label="To" />
        <Button variant="outlined">Search</Button>
      </Stack> */}
    </>
  );
}

export default Flight;
