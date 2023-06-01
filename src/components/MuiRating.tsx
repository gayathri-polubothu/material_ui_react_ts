import React, {useState} from 'react'
import {Stack, Rating} from "@mui/material";
import {FavoriteBorder, Favorite} from "@mui/icons-material";

export const MuiRating = () => {
  const [value, setValue] = useState<number|null>(null)
  console.log('value- ', value)
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
  }
  return (
      <Stack spacing={2}>
        <Rating value={value}
          precision={0.5}
          size={'large'}
          onChange={handleChange}
          icon={<Favorite fontSize={'inherit'} color={'error'}/>}
          emptyIcon={<FavoriteBorder fontSize={'inherit'}/> }
          defaultValue={3.5}
          highlightSelectedOnly
        />
      </Stack>
  )
}
