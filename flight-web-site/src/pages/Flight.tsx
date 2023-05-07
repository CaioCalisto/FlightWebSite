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
  const [departDate, setDepart] = useState<Date | null>(null);
  const changeDepart = (date: Date) => {
    setDepart(date)
  }

  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const changeReturnDate = (date: Date) => {
    setReturnDate(date)
  }

  const [from, setFrom] = useState("");
  const changeFrom = (from: string) => {
    setFrom(from);
  };

  const [to, setTo] = useState("");
  const changeTo = (to: string) => {
    setTo(to);
  };

  return (
    <>
      <Stack direction="column" gap={2}>
        <TripChose />

        <Stack direction="row">
          <LocationText label="From" onLocationChanged={changeFrom} />
          <LocationText label="To" onLocationChanged={changeTo} />
        </Stack>

        <Stack direction="row">
          {from != "" && to != "" && (
            <>
              <DateText label="Depart" onDateChanged={changeDepart} />
              <DateText label="Return" onDateChanged={changeReturnDate} />
              <Passengers />
            </>
          )}
          {departDate != null && returnDate != null && (
            <Button variant="outlined">Search</Button>
          )}
        </Stack>
      </Stack>
    </>
  );
}

export default Flight;
