import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ContentEditDeleteButton(props) {
    return ( 
        <Stack spacing={2} direction="row" 
        sx={{
            margin: '2% 0 0 0 '
        }}>
            <Button variant="text">Edit</Button>
            <Button variant="contained">Delete</Button>
        </Stack>
    )
}