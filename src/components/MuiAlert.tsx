import {Stack, Alert, AlertTitle, Button} from "@mui/material";
import Check from '@mui/icons-material/Check'
export const MuiAlert = () => {
  return (
      <Stack spacing={2}>
        <Alert severity={'error'}>This is an error alert</Alert>
        <Alert severity={'warning'}>This is a warning alert</Alert>
        <Alert severity={'info'}>This is an info alert</Alert>
        <Alert severity={'success'}>This is a success alert</Alert>

        <Alert variant={'outlined'} severity={'error'}>This is an error alert</Alert>
        <Alert variant={'outlined'} severity={'warning'}>This is a warning alert</Alert>
        <Alert variant={'outlined'} severity={'info'}>This is an info alert</Alert>
        <Alert variant={'outlined'} severity={'success'}>This is a success alert</Alert>

        <Alert variant={'filled'} severity={'error'} onClose={()=> alert('Close alert')}>
              <AlertTitle>Error</AlertTitle>
              This is an error alert
        </Alert>
        <Alert variant={'filled'} severity={'warning'}>
              <AlertTitle>Warning</AlertTitle>
              This is a warning alert</Alert>
        <Alert variant={'filled'} severity={'info'}>
              <AlertTitle>Info</AlertTitle>
              This is an info alert</Alert>
        <Alert variant={'filled'}
               icon={<Check fontSize={'inherit'}/>}
               severity={'success'}
               action={<Button color={'inherit'} size={'small'}>
                     Undo
               </Button>}
        >
              <AlertTitle>Success</AlertTitle>
              This is a success alert</Alert>

      </Stack>
  )
}
