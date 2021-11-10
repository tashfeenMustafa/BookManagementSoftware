import * as React from 'react';
import TopBar from './TopBar.js';
import SideDrawer from './SideDrawer.js';
import MainContent from './MainContent.js';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box 
    sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar 
        open={open}
        handleDrawerOpen={handleDrawerOpen}/>
      <SideDrawer
        open={open}
        handleDrawerClose={handleDrawerClose} />
      <MainContent 
        open={open}/>
    </Box>
  );
}