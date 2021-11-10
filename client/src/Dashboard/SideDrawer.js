import * as React from 'react';
import SideMenuItems from './SideMenuItems';
import SideMenu from './SideMenu';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

const drawerWidth = 240;

export default function SideDrawer(props) {
    return (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#282c34',
              color: '#FFF',
            },
          }}
        variant="persistent"
        anchor="left"
        open={props.open}>
          <SideMenu
            handleDrawerClose={props.handleDrawerClose} />
          <Divider />
          <SideMenuItems />
          <Divider />
      </Drawer>
    )
}