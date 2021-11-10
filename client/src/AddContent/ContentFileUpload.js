import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function ContentFileUpload() {
    return ( 
        <Grid item xs={4}>
            <TextField 
                sx={{
                    margin: '10px 0 10px 0',
                    width: '100%'
                }}  
                id="standard-basic" 
                label="File Upload" 
                variant="standard" />
        </Grid>
    )
}