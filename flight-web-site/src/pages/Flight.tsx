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
    <Container>

      <RadioGroup row>
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

      <Stack direction="row" justifyContent="center">
        <TextField label="From" />
        <TextField label="To" />
        <Button variant="outlined">Search</Button>
      </Stack>

    </Container>
  );
}

export default Flight;
