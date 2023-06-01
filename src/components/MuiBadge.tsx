import {Badge, Stack} from "@mui/material";
import Mail from '@mui/icons-material/Mail'
export const MuiBadge = () => {
  return (
      <Stack spacing={2} direction={'row'}>
        <Badge badgeContent={5} color={'primary'}>
          <Mail />
        </Badge>
        <Badge badgeContent={0} showZero color={'secondary'}>
          <Mail />
        </Badge>
        <Badge badgeContent={100} max={999} color={'secondary'}>
          <Mail />
        </Badge>
        <Badge variant={'dot'} invisible color={'primary'}>
          <Mail />
        </Badge>
      </Stack>
  )
}
