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
import TripChose from "../components/TripChose";

function Flight() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Stack direction="column" gap={4}>
        <TripChose />
        
        <Stack direction="row">
          <LocationText label="From" />
          <LocationText label="To" />
          <Button variant="outlined">Search</Button>
        </Stack>

        <Stack direction="row">
          <DateText label="Depart" />
          <DateText label="Return" />
        </Stack>
      </Stack>
    </>
  );
}

export default Flight;
