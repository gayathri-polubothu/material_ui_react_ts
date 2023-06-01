import React from 'react'
import {Link, Stack, Typography} from "@mui/material";

export const MuiLink = () => {
  return (
      <Stack spacing={2} direction={'row'} m={4}>
        <Link href={'#'}>Link</Link>
        <Typography variant={'h6'}>
          <Link href={'#'} color={'secondary'}>Secondary with Typography</Link>
        </Typography>
        <Link href={'#'} color={'error'} underline={'hover'}>Hover Link</Link>
        <Link href={'#'} color={'info'} variant={'body2'} underline={'none'}>None</Link>
      </Stack>
  )
}
