import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DateTextType = {
  label: string
  onDateChanged: (date: Date) => void
}

function DateText({ label, onDateChanged } : DateTextType) {

  const [date, setDate] = useState<Date | null>(null);
  const changeDate = (date: Date) => {
    setDate(date)
    onDateChanged(date)
  }

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Box component="form"
    sx={{
      "& .MuiTextField-root": {width: "30ch" },
    }}
    noValidate
    autoComplete="off">
      <TextField onClick={onClick} label={label} ref={ref} value={value}/>
    </Box>
  ));

  return (
    <div className='width: 0'>
      <DatePicker
        selected={date}
        onChange={(date: Date) => changeDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
}

export default DateText