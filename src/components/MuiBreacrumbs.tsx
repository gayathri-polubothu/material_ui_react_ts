import React from 'react'
import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import {NavigateNext} from "@mui/icons-material";

export const MuiBreacrumbs = () => {
  return (
      <Box m={2}>
        <Breadcrumbs aria-label={'breadcrumbs'}
                     separator={<NavigateNext fontSize={'small'}/>}
                     maxItems={3}
                     itemsBeforeCollapse={2}
        >
          <Link underline={'hover'} href={'#'}>
            Home
          </Link>
          <Link underline={'hover'} href={'#'}>
            Catalog
          </Link>
          <Link underline={'hover'} href={'#'}>
            Accessories
          </Link>
          <Typography color={'text.primary'}>Shoes</Typography>
        </Breadcrumbs>
      </Box>
  )
}
