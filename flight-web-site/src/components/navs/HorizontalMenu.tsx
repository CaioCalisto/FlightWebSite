import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HotelIcon from "@mui/icons-material/Hotel";

function HorizontalMenu() {
  return (
    <Stack
      direction={"row"}
      spacing={6}
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="row" alignItems="end">
        <Link to="/flights">
          <AirplanemodeActiveIcon />
          Flight
        </Link>
      </Stack>
      <Stack direction="row" alignItems="end">
        <Link to="/carhire">
          <DirectionsCarIcon />
          Car Hire
        </Link>
      </Stack>
      <Stack direction="row" alignItems="end">
        <HotelIcon />
        Hotel
      </Stack>
    </Stack>
  );
}

export default HorizontalMenu;
