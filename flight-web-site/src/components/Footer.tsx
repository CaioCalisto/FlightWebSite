import { Grid, Paper } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function Footer() {
  return (
    
    <Grid container spacing={2} justifyContent="space-evenly">
      <Grid item>
        <Stack>
          <h1>On the web</h1>
          <h2>Twitter</h2>
        </Stack>
      </Grid>
      <Grid item>
        <h1>Usefull Information</h1>
        <h2>Destination Guide</h2>
        <h2>Flight status</h2>
        <h2>Baggage service</h2>
        <h2>Accessibility</h2>
        <h2>Site map</h2>
      </Grid>
      <Grid item>
        <h1>Corporate</h1>
        <h2>About us</h2>
        <h2>Careers</h2>
        <h2>Investor relations</h2>
      </Grid>
      <Grid item>
        <h1>Transparency</h1>
        <h2>Contitions of carriage</h2>        
        <h2>Passengers rights</h2>
        <h2>Personal Data Policy</h2>
      </Grid>
    </Grid>
  )
}

export default Footer