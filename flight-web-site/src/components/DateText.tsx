import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DateTextType = {
  label: string
}

function DateText({ label } : DateTextType) {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Box component="form"
    sx={{
      "& .MuiTextField-root": {width: "25ch" },
    }}
    noValidate
    autoComplete="off">
      <TextField onClick={onClick} label={label} ref={ref} value={value}/>
    </Box>
  ));

  return (
    <div className='width: 0'>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
}

export default DateText