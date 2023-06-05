import {Stack} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import {useState} from "react";
import dayjs from "dayjs";

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  console.log('-selected date-', {selectedDate, selectedTime, selectedDateTime})
  return (
      <Stack spacing={4} sx={{width: '250px'}}>
        <DatePicker
            label={'Date-Picker'}
            views={['year', 'month', 'day']}
            openTo={'year'}
            // renderInput={(params: any)=> <TextField {...params}/>}
            value={selectedDate}
            onChange = {(newValue: any) => setSelectedDate(newValue)}
            slotProps={{
              textField: {
                helperText: 'MM/DD/YYYY',
              },
            }}
        />
        <TimePicker
            label={'Time-Picker'}
            // renderInput={(params: any)=> <TextField {...params}/>}
            value={selectedTime}
            onChange = {(newValue: any) => setSelectedTime(newValue)}
        />

        <DateTimePicker
            label={'DateTime-Picker'}
            // renderInput={(params: any)=> <TextField {...params}/>}
            value={selectedDateTime}
            onChange = {(newValue: any) => setSelectedDateTime(newValue)}
        />
      </Stack>
  )
}
