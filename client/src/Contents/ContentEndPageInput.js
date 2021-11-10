import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function ContentEndPageInput(props) {
    return ( 
        <TextField 
            sx={{
                margin: '0 2% 0 2%',
                width: '10%'
            }}  
            id="standard-basic" 
            label="E" 
            variant="standard" />
    )
}