import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function ContentFileTitle(props) {
    return ( 
        <Grid item xs={8}>
            <TextField 
                sx={{
                    margin: '10px 0 10px 0',
                    width: '100%'
                }}  
                id="standard-basic" 
                label={props.label} 
                variant="standard" />
        </Grid>
    )
}