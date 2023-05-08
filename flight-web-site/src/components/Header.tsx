import { Grid, Stack } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => (
    <Grid container alignItems="center">
      <Grid item xs={6}>
        <img src="src/assets/ACME-logo.png" style={{ width: "25%"}}/>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2} justifyContent="end">
          <LanguageIcon style={{width: "7%", height: "7%"}} />
          <PersonIcon style={{width: "7%", height: "7%"}} />
        </Stack>
      </Grid>
    </Grid>
  )


export default Header