import { Box, Stack } from '@mui/system'
import React from 'react'

function HorizontalMenu() {
  return (
    <Stack direction={"row"} spacing={2} justifyContent="center" alignItems="end">
      <div>
        <span>&#9992;<span>Flight</span></span>
      </div>
      <div>
        <span>&#128665;<span></span>Car Hire</span>
      </div>
      <div>
        <span>&#127977;<span></span>Hotels</span>
      </div>
    </Stack>
  )
}

export default HorizontalMenu