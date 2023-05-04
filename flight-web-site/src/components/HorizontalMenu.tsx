import { Box, Stack } from '@mui/system'
import React from 'react'

function HorizontalMenu() {
  return (
    <Stack direction={"row"} spacing={2} justifyContent="center">
      <Box>&#9992; Flight</Box>
      <Box>&#128665; Car Hire</Box>
      <Box>&#127977; Hotels</Box>
    </Stack>
  )
}

export default HorizontalMenu