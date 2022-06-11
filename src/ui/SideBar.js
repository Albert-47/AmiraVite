import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { cyan } from '@mui/material/colors';

const SideBar = ({ window }) => {
  const primary = cyan[400];
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', display:{xs: 'none', sm:'block'} }}>
    <nav aria-label="main mailbox folders">
      <List sx={{bgcolor: primary}}>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#' >
            <ListItemText primary="Zapatos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#' >
            <ListItemText primary="Carteras" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  </Box>
  )
}

export default SideBar