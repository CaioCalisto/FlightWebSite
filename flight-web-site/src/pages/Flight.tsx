import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import DateText from "../components/DateText";
import LocationText from "../components/LocationText";

function Flight() {
  const [startDate, setStartDate] = useState(new Date());

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

      <Stack direction="row">
        <LocationText label="From" />
        <LocationText label="To" />
        <Button variant="outlined">Search</Button>
      </Stack>

      <Stack direction="row" justifyContent="left">
        <DateText label="Depart" />
        <DateText label="Return" />
      </Stack>
    </>
  );
}

export default Flight;
