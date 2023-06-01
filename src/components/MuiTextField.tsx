import React, {useState} from 'react'
import {Stack, TextField, InputAdornment} from "@mui/material"
import {VisibilityOff} from "@mui/icons-material";

export const MuiTextField = () => {
  const [value, setValue] = useState<string>('')
  return (
      <Stack spacing={4}>
        <Stack direction={'row'} spacing={2}>
          <TextField label={'Name'} variant={'outlined'}/>
          <TextField label={'Name'} variant={'filled'}/>
          <TextField label={'Name'} variant={'standard'}/>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <TextField label={'Small secondar'} size={'small'} color={'secondary'}/>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <TextField label={'Form Input'} required value={value} onChange={(e)=> setValue(e.target.value)}
                     error={!value}
                     helperText={!value ?  'Required' : 'Do not share your password to anyone'}
                     variant={'outlined'}/>
          <TextField label={'Password'} type={'password'} variant={'standard'} helperText={'Do not show your password to anyone'}/>
          <TextField label={'Read Only'} InputProps={{readOnly: true}} />
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <TextField  label={'Amount'} InputProps={{
            startAdornment: <InputAdornment position={'start'}> $</InputAdornment>,
          }}/>
          <TextField  label={'Weight'} InputProps={{
            endAdornment: <InputAdornment position={'end'}>kg</InputAdornment>,
          }}/>
          <TextField  label={'Password'} type={'password'} InputProps={{
            endAdornment: <VisibilityOff />,
          }}/>
        </Stack>
      </Stack>
  )
}
