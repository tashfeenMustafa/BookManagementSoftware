import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function ContentFileUpload(props) {
    let handleChange = (event) => {
        props.handleFileChange(event.target.value)
    }

    return ( 
        <Grid item xs={4}>
            <TextField 
                sx={{
                    margin: '10px 0 10px 0',
                    width: '100%'
                }} 
                value={props.file} 
                onChange={handleChange} 
                id="standard-basic" 
                label={props.label}
                variant="standard" />
        </Grid>
    )
}