import React, {useState} from 'react'
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText} from '@mui/material'
export const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  const handleChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(_event.target.value)
  }
  return (
      <Box width={'500px'}>
        <FormControl error>
          <FormLabel id={'job-experience-group-label'}>Years of experience</FormLabel>
          <RadioGroup value={value}
                      onChange={handleChange}
                      name={'job-experience-group'}
                      row
          aria-label={'job-experience-radio-group'}>
            <FormControlLabel control={<Radio size={'small'} color={'secondary'}/>} label={'0-2'} value={'0-2'} />
            <FormControlLabel control={<Radio size={'small'} color={'secondary'}/>} label={'3-5'} value={'3-5'} />
            <FormControlLabel control={<Radio size={'small'} color={'secondary'}/>} label={'6-10'} value={'6-10'} />
          </RadioGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
  )
}
