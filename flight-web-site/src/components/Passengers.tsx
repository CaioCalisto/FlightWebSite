import { Box, TextField } from '@mui/material'
import React from 'react'

function Passengers() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {width: "14ch" },
      }}
      noValidate
      autoComplete="off">
        <TextField label="Passengers" />
      </Box>
  )
}

export default Passengers