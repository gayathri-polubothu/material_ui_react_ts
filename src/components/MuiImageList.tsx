import React from 'react'
import {Stack, ImageList, ImageListItem, Box, ImageListItemBar} from "@mui/material";

export const MuiImageList = () => {
  return (
      <Stack spacing={4}>
        <ImageList sx={{ width:500, height: 450}} cols={3} rowHeight={164}>
          {imageData?.map((item: ImageType, i)=> (
            <ImageListItem key={item?.img+i}>
              <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} loading={'lazy'} alt={item.title}/>
              <ImageListItemBar title={item.title} subtitle={`${item.title} sub title`} />
            </ImageListItem>
          ))}
        </ImageList>
        <ImageList variant={'woven'} gap={8} sx={{ width:500, height: 450}} cols={3} rowHeight={164}>
          {imageData?.map((item: ImageType, i)=> (
              <ImageListItem key={item?.img+i}>
                <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} loading={'lazy'} alt={item.title}/>
              </ImageListItem>
          ))}
        </ImageList>
        <Box  sx={{ width:500, height: 450, overflowY: 'scroll'}}>
          <ImageList variant={'masonry'} gap={8} cols={3}>
            {imageData?.map((item: ImageType, i)=> (
                <ImageListItem key={item?.img+i}>
                  <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} loading={'lazy'} alt={item.title}/>
                </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
  )
}

type ImageType = {
  img: string
  title: string
}
const imageData: ImageType[] = [{
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  title: 'Breakfast'
},{
  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  title: 'Burger'
},{
  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  title: 'Camera'
},{
  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  title: 'Coffee'
},{
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  title: 'Breakfast'
},{
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  title: 'Breakfast'
},{
  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  title: 'Burger'
},{
  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  title: 'Camera'
},{
  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  title: 'Coffee'
},{
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  title: 'Breakfast'
}]