import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

function TripChose() {
  return (
    <RadioGroup row style={{ padding: "10px 0 10px 0" }}>
        <FormControlLabel
          value="returnTrip"
          control={<Radio />}
          label="Return Trip"
        />
        <FormControlLabel
          value="oneWay"
          control={<Radio />}
          label="One way"
        />
      </RadioGroup>
  )
}

export default TripChose