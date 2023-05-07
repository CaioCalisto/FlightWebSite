
import { Stack } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-evenly">
      <Stack direction="column">
        <h1>On the web</h1>
        <h2>Twitter</h2>
      </Stack>
      <Stack direction="column">
        <h1>Usefull Information</h1>
        <h2>Destination Guide</h2>
        <h2>Flight status</h2>
        <h2>Baggage service</h2>
        <h2>Accessibility</h2>
        <h2>Site map</h2>
      </Stack>
      <Stack direction="column">
        <h1>Corporate</h1>
        <h2>About us</h2>
        <h2>Careers</h2>
        <h2>Investor relations</h2>
      </Stack>
      <Stack direction="column">
        <h1>Transparency</h1>
        <h2>Contitions of carriage</h2>
        <h2>Passengers rights</h2>
        <h2>Personal Data Policy</h2>
      </Stack>
    </Stack>
  );
}

export default Footer;
