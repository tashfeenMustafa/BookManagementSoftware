import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function ContentStartPageInput(props) {
    let handleChange = (event) => {
        props.handleSChange(event.target.value)
    }

    return ( 
        <TextField 
            sx={{
                margin: '0 0 0 1%',
                width: '5%'
            }}  
            value={props.s} 
            onChange={handleChange} 
            id="standard-basic" 
            label={props.label}
            variant="standard" />
    )
}