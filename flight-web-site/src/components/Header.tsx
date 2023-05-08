import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';

function Header() {
  return (
    <Grid container alignItems="center">
      <Grid item xs={6}>
        <img src="src/assets/ACME-logo.png" style={{ width: "25%"}}/>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={3} justifyContent="end">
          <LanguageIcon style={{width: "8%", height: "8%"}} />
          <PersonIcon style={{width: "8%", height: "8%"}} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Header
{/* <Image src="src/assets/earth.png" style={{ width: "10%" }} className="earth-icon" />
<Image src="src/assets/user.png" style={{ width: "10%" }} />         */}