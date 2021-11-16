import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function ContentFileTitle(props) {
    let handleChange = (event) => {
        props.handleContentTitleChange(event.target.value)
    }

    return ( 
        <Grid item xs={8}>
            <TextField 
                sx={{
                    margin: '10px 0 10px 0',
                    width: '100%'
                }}
                value={props.contentTitle} 
                onChange={handleChange}
                id="standard-basic" 
                label={props.label} 
                variant="standard" />
        </Grid>
    )
}