import {Tooltip, IconButton, Icon} from "@mui/material";
import Delete from '@mui/icons-material/Delete'
export const MuiTooltip = () => {
  return (
      <Tooltip title={'Delete'} placement={'right-end'} arrow enterDelay={400} leaveDelay={200}>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
  )
}
