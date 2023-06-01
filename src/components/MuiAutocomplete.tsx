import React, {useState} from 'react'
import {Stack, Autocomplete, TextField} from "@mui/material";

type skill = {
  id: number
  label: string
}
const skills = ['HTML', 'Javascript', 'CSS', 'Typescript']
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1, label: skill
}))
export const MuiAutocomplete = () => {
  const [value, setValue] =useState<string|null>(null);
  const [skill, setSkill] =useState<skill|null>(null);
  console.log('value--', value, skill)
  return (
      <Stack spacing={2} width={'250px'}>
        <Autocomplete
            value={value}
            freeSolo
            onChange={(event:any, newValue: string|null)=> setValue(newValue)}
            renderInput={(params)=> <TextField{...params} label={'Skills'}/>}
            options={skills} />
        <Autocomplete
            value={skill}
            onChange={(event:any, newValue: skill|null)=> setSkill(newValue)}
            renderInput={(params)=> <TextField{...params} label={'Skills'}/>}
            options={skillsOptions} />
      </Stack>
  )
}
