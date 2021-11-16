import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import './BooksListItem.css'

let formatDateTime = (dateTimeString) => {
    let today = new Date(dateTimeString)
    let dd = today.getDate()
    let mm = today.getMonth() + 1 //As January is 0.
    let yyyy = today.getFullYear()
    let hours = today.getHours()
    let minutes = today.getMinutes()

    if (hours < 10) 
        hours = '0' + hours
    if (minutes < 10)
        minutes = '0' + minutes

    if (dd < 10) 
        dd = '0' + dd
    if (mm < 10) 
        mm = '0' + mm
    return (dd + '-' + mm + '-' + yyyy + ', ' + hours + ':' + minutes)
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const theme = createTheme({
  components: {
    MuiSvgIcon: {
        styleOverrides: {
            root: {
                margin: 'auto',
                color: '#000'
            },
        },
    },
    MuiTypography: {
        styleOverrides: {
            root: {
                color: '#000',
                margin: 'auto'
            },
        },
    },
  },
});

export default function BooksListItem(props) {
    return (
        <Link
            className="bookItemClass" 
            to={`/books/${props.book.bookTitle}`}>
            <Box 
            key={props.index} 
            sx={{ 
                margin: '1% 0 1% 0',
                p: '12px 8px 12px 8px', 
                border: '1px solid grey' 
            }}>
                <Grid 
                    container 
                    spacing={2}>
                    <Grid 
                        item 
                        xs={6} 
                        sm={6} 
                        md={6} 
                        lg={6}>
                        <Checkbox {...label} />
                        <Typography component="span" sx={{  }}>
                            {props.book.bookTitle}      
                        </Typography>
                    </Grid>
                    <Grid 
                        item 
                        xs={6} 
                        sm={6} 
                        md={6} 
                        lg={6}>
                            <ThemeProvider theme={theme}>
                                <div style={{
                                    margin: 'auto',
                                    float: 'right',
                                    width: '10%',
                                    paddingTop: '7px'
                                }}>
                                    <span style={{
                                        paddingRight: '15px',
                                    }}>
                                        <EditIcon />
                                    </span>
                                    <span style={{
                                        paddingRight: '10px'
                                    }}>
                                        <DeleteIcon />
                                    </span>
                                </div>
                            </ThemeProvider>
                    </Grid>
                </Grid>
                <Grid
                    item 
                    xs={12} 
                    sm={12} 
                    md={12} 
                    lg={12}>
                    <Typography
                    sx={{
                        paddingLeft: 1,
                        paddingBottom: 4
                    }}
                        variant="p">
                            <b>Created At: </b>{formatDateTime(props.book.dateCreatedAt) || 'N/A'}
                    </Typography>
                </Grid>
            </Box>
        </Link>
    )
}