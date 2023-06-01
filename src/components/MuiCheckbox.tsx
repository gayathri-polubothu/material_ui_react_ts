import React, {useState} from 'react'
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup} from '@mui/material'
import {BookmarkBorder, Bookmark} from "@mui/icons-material";


export const MuiCheckbox = () => {
  const [value, setValue] = useState<boolean>(false)
  const [skills, setSkills]=useState<string[]>([])
  const handleChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(_event.target.checked)
  }
  const handleSkillChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    const idx=skills.indexOf(_event.target.value);
    if(idx === -1) {
      setSkills([...skills, _event.target.value])
    } else {
      setSkills(skills.filter(skill=> skill !== _event.target.value))
    }
  }
  return (
      <Box>
        <Box>
          <FormControlLabel
              label={'I accept terms and conditions'}
              control={<Checkbox size={'small'} color={'secondary'} checked={value} onChange={handleChange}/>} />
        </Box>
        <Box>
          <Checkbox
              icon={<BookmarkBorder />}
              checkedIcon={<Bookmark />}
              checked={value}
              onChange={handleChange}
          />
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
              <FormControlLabel
                  label={'HTML'}
                  control={<Checkbox value={'html'} checked={skills.includes('html')} onChange={handleSkillChange}/>} />
              <FormControlLabel
                  label={'CSS'}
                  control={<Checkbox value={'css'} checked={skills.includes('css')} onChange={handleSkillChange}/>} />
              <FormControlLabel
                  label={'Javascript'}
                  control={<Checkbox value={'javascript'} checked={skills.includes('javascript')} onChange={handleSkillChange}/>} />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
  )
}
