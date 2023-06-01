import React, {useState} from 'react'
import {Stack, Button, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from "@mui/material";
import {FormatBold, FormatItalic, FormatUnderlined, Html} from "@mui/icons-material";
export const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null)
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
    setFormats(updatedFormats)
  }
  return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={'row'}>
                <Button variant={'text'} href={'https://google.com'}>Text</Button>
                <Button variant={'contained'}>Contained</Button>
                <Button variant={'outlined'}>Outlined</Button>
                <Button variant={'text'}>Text</Button>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Button variant={'contained'} color={'primary'}>Primary</Button>
                <Button variant={'contained'} color={'secondary'}>Secondary</Button>
                <Button variant={'contained'} color={'error'}>Error</Button>
                <Button variant={'contained'} color={'warning'}>Warning</Button>
                <Button variant={'contained'} color={'info'}>Info</Button>
                <Button variant={'contained'} color={'success'}>Success</Button>
            </Stack>
            <Stack spacing={2} direction={'row'} display={'block'}>
                <Button variant={'contained'} color={'primary'} size={'small'}>Small</Button>
                <Button variant={'contained'} color={'secondary'} size={'medium'}>Medium</Button>
                <Button variant={'contained'} color={'error'} size={'large'}>Large</Button>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Button variant={'contained'} startIcon={<GitHubIcon />} disableElevation>Github</Button>
                <Button variant={'contained'} endIcon={<GitHubIcon />} disableRipple>Github</Button>
                <IconButton aria-label={'github'} color={'primary'} size={'small'}>
                    <GitHubIcon />
                </IconButton>
            </Stack>
            <Stack direction={'row'}>
                <ButtonGroup variant={'contained'}
                             orientation={'vertical'}
                             size={'small'}
                             color={'secondary'}
                             aria-label={'alignment button group'}
                >
                    <Button onClick={()=> alert('Left clicked')}>Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
          <Stack direction={'row'}>
            <ToggleButtonGroup
                size={'small'}
                color={'success'}
                orientation={'vertical'}
                exclusive
                value={formats}
                onChange={handleFormatChange} aria-label={'text-formatting'}>
              <ToggleButton value={'bold'} aria-label={'bold'}><FormatBold /></ToggleButton>
              <ToggleButton value={'italic'} aria-label={'italic'}><FormatItalic /></ToggleButton>
              <ToggleButton value={'underlined'} aria-label={'underlined'}><FormatUnderlined /></ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>
    )
}
