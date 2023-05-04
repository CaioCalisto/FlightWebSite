import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function HorizontalMenu() {
  return (
    <Stack direction={"row"} spacing={4} justifyContent="center" alignItems="end">
      <div>
        <Link to="/flights">
          <span>&#9992;<span>Flight</span></span>
        </Link>      
      </div>
      <div>
        <Link to="/carhire">
          <span>&#128665;<span></span>Car Hire</span>
        </Link>
      </div>
      <div>
        <span>&#127977;<span></span>Hotels</span>
      </div>
    </Stack>
  )
}

export default HorizontalMenu