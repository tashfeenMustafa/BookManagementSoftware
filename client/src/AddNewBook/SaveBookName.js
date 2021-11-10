import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function SaveBookName() {
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField 
                sx={{
                    margin: '10px 0 10px 0',
                    width: '100%'
                }}  
                id="standard-basic" 
                label="Add New Book" 
                variant="standard" />
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained">Save Book</Button>
            </Grid>
        </Grid>
    )
}