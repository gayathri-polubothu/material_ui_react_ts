import React from 'react'
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material";

export const MuiCard = () => {
  return (
      <Box width={'300px'}>
        <Card>
          <CardMedia
              alt={'unsplash image'}
              component={'img'}
              height={'140'}
              image={'https://source.unsplash.com/random'} />
          <CardContent>
            <Typography gutterBottom variant={'h5'} component={'div'}>React</Typography>
            <Typography gutterBottom variant={'body2'} color={'text.secondary'}>
              React is a JavaScript library for building user interfaces.
              Declarative: React makes it painless to create interactive UIs.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size={'small'}>Share</Button>
            <Button size={'small'}>Learn more</Button>
          </CardActions>
        </Card>
      </Box>
  )
}
