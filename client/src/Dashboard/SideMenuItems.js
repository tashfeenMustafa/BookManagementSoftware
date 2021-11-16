import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import PersonIcon from '@mui/icons-material/Person'
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

export default function SideMenuItems() {
  return (
    <List>
      {[{text: 'Home', link: `/dashboard`}, {text: 'Books', link: `/books/`}].map((menu, index) => (
        <Link
          key={menu.text} 
          to={menu.link}>            
            <ThemeProvider theme={theme}>
              <ListItem button>
                <ListItemIcon>
                  {index % 2 === 0 ? <LibraryBooksIcon /> : <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={menu.text} />
              </ListItem>
            </ThemeProvider>
        </Link>
      ))}
    </List>
  )
}