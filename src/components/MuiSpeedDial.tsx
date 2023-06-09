import React from 'react'
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import {FileCopyOutlined, Print, Share, Edit} from '@mui/icons-material'

export const MuiSpeedDial = () => {
  return (
      <SpeedDial ariaLabel={'Navigation speed dial'}
      sx={{position: 'absolute', bottom: 16, right: 16}}
                 icon={<SpeedDialIcon openIcon={<Edit />}/>}
      >
        <SpeedDialAction icon={<FileCopyOutlined />} tooltipTitle={'Copy'} tooltipOpen></SpeedDialAction>
        <SpeedDialAction icon={<Print />} tooltipTitle={'Print'} tooltipOpen></SpeedDialAction>
        <SpeedDialAction icon={<Share />} tooltipTitle={'Share'} tooltipOpen></SpeedDialAction>
      </SpeedDial>
  )
}
