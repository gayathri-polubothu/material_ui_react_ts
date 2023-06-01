import React from 'react'
import {Box, Stack, Divider, Grid, Paper} from "@mui/material";

export const MuiLayout = () => {
  return (
      <Paper sx={{
        padding: '32px',
      }} elevation={4}
      >
        <Stack
            direction={'column-reverse'}
            spacing={2}
            sx={{ boarder: '1px solid' }}
            divider={<Divider orientation={'vertical'} flexItem/>}
        >
          <Box component={'span'}
               sx={{
                 backgroundColor:'primary.main',
                 color: 'white',
                 height: '100px',
                 width: '100px',
                 padding: '16px',
                 '&:hover': {
                   backgroundColor: 'primary.light'
                 }}}
          >
            Material UI React
          </Box>
          <Box
              display='flex'
              height='100px'
              width='100px'
              bgcolor='success.light'
              p={2}
          >
            New Box
          </Box>
        </Stack>
        <Grid my={4} container rowSpacing={2} columnSpacing={1}>
          <Grid item xs={6}>
            <Box bgcolor={'primary.light'} p={2}>Item 1</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor={'primary.light'} p={2}>Item 2</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor={'primary.light'} p={2}>Item 3</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor={'primary.light'} p={2}>Item 4</Box>
          </Grid>
        </Grid>
      </Paper>

  )
}
