import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

export default function SideMenuItems() {
  let params = useParams()
  let user = params.user

  return (
    <List>
      {[{text: 'Home', link: `/dashboard`}, {text: 'Books', link: `/books/`}, {text: 'Account Settings', link: '/account'}].map((menu, index) => (
        <Link key={menu.text} to={menu.link}>
          <ListItem button>
            <ListItemIcon sx={{
              color: '#FFF'
            }}>
              {index % 2 === 0 ? <LibraryBooksIcon /> : <PersonIcon />}
            </ListItemIcon>
            <ListItemText primary={menu.text} />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}