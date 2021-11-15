import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function ContentStartPageInput(props) {
    return ( 
        <TextField 
            sx={{
                margin: '0 0 0 1%',
                width: '5%'
            }}  
            id="standard-basic" 
            label={props.label}
            variant="standard" />
    )
}