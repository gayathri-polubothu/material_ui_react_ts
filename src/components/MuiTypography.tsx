import React from 'react'
import {Typography} from "@mui/material";
export const MuiTypography = () => {
    return (
        <div>
            <Typography variant={'h1'}>h1 Heading</Typography>
            <Typography variant={'h2'}>h2 Heading</Typography>
            <Typography variant={'h3'}>h3 Heading</Typography>
            <Typography variant={'h4'} component={'h1'} gutterBottom>h4 Heading</Typography>
            <Typography variant={'h5'}>h5 Heading</Typography>
            <Typography variant={'h6'}>h6 Heading</Typography>

            <Typography variant={'subtitle1'}>subtitle1</Typography>
            <Typography variant={'subtitle2'}>subtitle2</Typography>

            <Typography >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor purus nec finibus elementum. Nam lacinia tellus sit amet eros mollis bibendum. Pellentesque sagittis ultricies nulla, vitae vehicula sapien varius quis. Nullam eget turpis cursus, blandit felis eu, commodo magna. Nulla tincidunt, purus ac porttitor consectetur, dolor tellus auctor augue, ut vulputate erat elit ut purus. Curabitur sem nisi, suscipit id congue sit amet, pharetra eu nulla. Fusce vel metus lobortis, laoreet velit ut, condimentum nisi. Proin convallis odio leo, vitae rutrum nisi tincidunt nec. Mauris molestie rutrum eros eu lacinia. </Typography>
            <Typography variant={'body2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor purus nec finibus elementum. Nam lacinia tellus sit amet eros mollis bibendum. Pellentesque sagittis ultricies nulla, vitae vehicula sapien varius quis. Nullam eget turpis cursus, blandit felis eu, commodo magna. Nulla tincidunt, purus ac porttitor consectetur, dolor tellus auctor augue, ut vulputate erat elit ut purus. Curabitur sem nisi, suscipit id congue sit amet, pharetra eu nulla. Fusce vel metus lobortis, laoreet velit ut, condimentum nisi. Proin convallis odio leo, vitae rutrum nisi tincidunt nec. Mauris molestie rutrum eros eu lacinia.</Typography>

        </div>
    )
}
