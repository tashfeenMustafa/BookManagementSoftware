import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './SideMenuItem.css'

const theme = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: '#FFF'
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#FFF'
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
      }
    },
  },
});

const menuItems = [
  {text: 'Home', link: `/dashboard`, disabled: false, icon: <LibraryBooksIcon />}, 
  {text: 'Books', link: `/books/`, disabled: true, icon: <LibraryBooksIcon />}, 
  {text: 'Master', link: `/master/`, disabled: false, icon: <LibraryBooksIcon />}
]

export default function SideMenuItems() {
  return (
    <List>
      {menuItems.map((menu, index) => (
        <Link
          key={menu.text} 
          to={menu.link}>            
            <ThemeProvider theme={theme}>
              <ListItem button disabled={menu.disabled} >
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.text} />
              </ListItem>
            </ThemeProvider>
        </Link>
      ))}
    </List>
  )
}