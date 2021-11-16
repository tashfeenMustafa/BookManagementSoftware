import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function ContentEndPageInput(props) {
    let handleChange = (event) => {
        props.handleEChange(event.target.value)
    }

    return ( 
        <TextField 
            sx={{
                margin: '0 0 0 1%',
                width: '5%'
            }} 
            value={props.e} 
            onChange={handleChange} 
            id="standard-basic" 
            label={props.label} 
            variant="standard" />
    )
}