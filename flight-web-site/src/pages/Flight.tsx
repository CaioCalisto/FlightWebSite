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
import Passengers from "../components/Passengers";
import TripChose from "../components/TripChose";

function Flight() {
  const [startDate, setStartDate] = useState(new Date());
  
  const [from, setFrom] = useState("")
  const changeFrom = (from: string) => {
    setFrom(from)
  }

  const [to, setTo] = useState("")
  const changeTo = (to: string) => {
    setTo(to)
  }

  return (
    <>
      <Stack direction="column" gap={4}>
        <TripChose />

        <Stack direction="row">
          <LocationText label="From" onLocationChanged={changeFrom} />
          <LocationText label="To" onLocationChanged={changeTo} />
          <Button variant="outlined">Search</Button>
        </Stack>

        <Stack direction="row">
          <DateText label="Depart" />
          <DateText label="Return" />
          <Passengers />
        </Stack>
      </Stack>
    </>
  );
}

export default Flight;
