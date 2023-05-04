import { Box, Grid, Stack } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <img src="src/assets/ACME-logo.png" style={{ width: "30%"}}/>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={1} justifyContent="end">
          <img src="src/assets/earth.png" alt="" style={{ width: "15%"}} />
          <img src="src/assets/user.png" alt="" style={{ width: "15%"}} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Header
{/* <Image src="src/assets/earth.png" style={{ width: "10%" }} className="earth-icon" />
<Image src="src/assets/user.png" style={{ width: "10%" }} />         */}