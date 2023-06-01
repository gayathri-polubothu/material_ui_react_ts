import React, {useState} from 'react'
import {Box, FormControlLabel, Switch} from "@mui/material";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(_event.target.checked)
  }
  return (
      <Box>
        <FormControlLabel control={<Switch checked={checked} onChange={handleChange} size={'small'} color={'success'}/>} label={'Dark Mode'} />
      </Box>
  )
}
