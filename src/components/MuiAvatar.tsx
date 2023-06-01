import {Avatar, Stack, AvatarGroup} from '@mui/material'
export const MuiAvatar = () => {
  return (
      <Stack spacing={4}>
        <Stack direction={'row'} spacing={1}>
          <Avatar sx={{
            backgroundColor: 'primary.light'
          }}>HC</Avatar>
          <Avatar sx={{backgroundColor: 'success.light'}}>GP</Avatar>
        </Stack>
        <Stack direction={'row'} spacing={1}>
          <AvatarGroup max={3}>
            <Avatar sx={{backgroundColor: 'primary.light'}}>HC</Avatar>
            <Avatar sx={{backgroundColor: 'success.light'}}>GP</Avatar>
            <Avatar src={'https://randomuser.me/api/portraits/women/79.jpg'} alt={'Jane Doe'}/>
            <Avatar src={'https://randomuser.me/api/portraits/men/51.jpg'} alt={'Jane Doe'}/>
          </AvatarGroup>
        </Stack>
        <Stack direction={'row'} spacing={1}>
          <Avatar variant={'rounded'} sx={{
            backgroundColor: 'primary.light',
            width: 48, height: 48
          }}>HC</Avatar>
          <Avatar sx={{backgroundColor: 'success.light', width: 48, height: 48}}>GP</Avatar>
        </Stack>
      </Stack>
  )
}
