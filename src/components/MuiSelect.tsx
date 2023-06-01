import React, {useState} from 'react'
import {Box, TextField, MenuItem } from "@mui/material";

export const MuiSelect = () => {
 const [countries, setCountries] = useState<string[]>([])
const handleChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    const value = _event.target.value;
   setCountries(typeof value === 'string' ? value.split('') : value)
}
  return (
      <Box width={'250px'}>
        <TextField
            label={'Select country'} select
            fullWidth
            SelectProps={{
              multiple: true
            }}
            size={'small'}
            color={'secondary'}
            error={countries?.length === 0}
            helperText={countries?.length === 0 ? 'Please select your country' : null}
            value={countries} onChange={handleChange}>
          <MenuItem value={'IN'}>India</MenuItem>
          <MenuItem value={'US'}>US</MenuItem>
          <MenuItem value={'AU'}>Australia</MenuItem>
          <MenuItem value={'UK'}>United Kingdom</MenuItem>
        </TextField>
      </Box>
  )
}
