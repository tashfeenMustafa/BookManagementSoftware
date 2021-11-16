import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          margin: 'auto',
        },
      },
    },
  },
});

export default function BooksListItem(props) {
    return (
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
                    <Typography component="span" sx={{ margin: 'auto' }}>
                        {props.book.bookTitle }      
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
        </Box>
    )
}