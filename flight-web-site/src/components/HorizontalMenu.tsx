import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';

function HorizontalMenu() {
  return (
    <Stack direction={"row"} spacing={4} justifyContent="center" alignItems="center">
        <Link to="/flights">
          <AirplanemodeActiveIcon />Flight
        </Link>  
        <Link to="/carhire">
          <DirectionsCarIcon/> Car Hire
        </Link>
        <HotelIcon /> Hotel
    </Stack>
  )
}

export default HorizontalMenu