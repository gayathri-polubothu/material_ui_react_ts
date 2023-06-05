import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Save from '@mui/icons-material/Save'

export const MuiLoadingButton = () => {
  return (
      <Stack spacing={2} direction={'row'}>
        <LoadingButton variant={'outlined'}>
          Submit
        </LoadingButton>
        <LoadingButton loading variant={'outlined'}>
          Loading
        </LoadingButton>
        <LoadingButton variant={'outlined'} loadingIndicator={'Loading...'} >
          Fetch Data
        </LoadingButton>
        <LoadingButton loadingIndicator={'Loading...'} variant={'outlined'} loading>
          Fetch Data
        </LoadingButton>
        <LoadingButton loadingPosition={'start'}
                       variant={'outlined'}
                       startIcon={<Save />}
        >
          Save
        </LoadingButton>
        <LoadingButton
            loading
            loadingPosition={'start'}
            variant={'outlined'}
            startIcon={<Save />}
        >
          Save
        </LoadingButton>
      </Stack>
  )
}
